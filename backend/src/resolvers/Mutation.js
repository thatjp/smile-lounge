const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeAnEmail } = require('../mail');
const stripe = require('../stripe');

const mutations = {
  async createItem(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in');
    }
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
          ...args,
        },
      },
      info,
    );
    console.log(item);
    return item;
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, '{id title}');
    return ctx.db.mutation.deleteItem({ where }, info);
  },

  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
        permissions: { set: ['USER'] },
      },
    }, info);
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    return user;
  },

  async signin(parent, { email, password }, ctx, info) {
    // create a user const based on matching the user wehre the user emails match
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`User not found for email ${email}`);
    }
    // check to see if the password is vaild by comparing the user password and the input password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password');
    }
    // sign a new json web token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // cerate a cookie with the JSON web token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    return user;
  },

  async signout(parent, { email, password }, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'see you later' };
  },

  async requestReset(parent, { email, password }, ctx, info) {
    // on call check to see if the email passed is found in the db
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`User not found for email ${email}`);
    }
    // generate a random reset token to be stored on user
    const resetToken = (await promisify(randomBytes)(20)).toString('hex');
    // generate the time that the resetToken will be valid
    const resetTokenExpiry = Date.now() + 3600000;
    // apply the token to the updatedUser with the expire time
    const res = await ctx.db.mutation.updateUser({
      where: { email },
      data: { resetToken, resetTokenExpiry },
    });
    // Remove on production

    const mailRes = await transport.sendMail({
      from: 'jp@jp.com',
      to: user.email,
      subject: 'Here is your Password reset',
      html: makeAnEmail(`Your Password Reset Token is here!
      \n\n
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}"> Click Here to Reset</a>`),
    });

    return { message: 'Reset token sent' };
  },

  async resetPassword(parent, args, ctx, info) {
    // Make sure the new passwords match to continue
    if (args.password !== args.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    // Validate the user by finding the matching reset token in the database and chec king hte resetTokenExpiry has not expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
      },
    });

    if (!user) {
      throw new Error('This token is either invalid or expired');
    }
    // if the user is found hash the new password using bcrypt
    const password = await bcrypt.hash(args.password, 10);

    // update the user using the updateUser mutation by finding the matching email in the database, updating the password field with the new password and reseting the resetToken variables to null to clear them
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    // Create a new token to be applied to the user after updating the password
    const token = jwt.sign({ userId: updatedUser.id },
      process.env.APP_SECRET);
    // Apply a new cookie to the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    return updatedUser;
  },
  async addToCart(parent, args, ctx, info) {
    const { userId } = ctx.request;
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      },
    });
    if (existingCartItem) {
      return ctx.db.mutation.updateCartItem({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + 1 },
      });
    }
    return ctx.db.mutation.createCartItem({
      data: {
        user: {
          connect: { id: userId },
        },
        item: {
          connect: { id: args.id },
        },
      },
    });
  },
  async removedFromCart(parent, args, ctx, info) {
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{id, user { id }}`
    );
    if (!cartItem) throw new Error('No CartItem Found');
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('Not Signed In');
    }
    return ctx.db.mutation.deleteCartItem({
      where: { id: args.id },
    },
    info
    )
  },
  async createOrder(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) throw new Error('You must be signed in to order');
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `
      {
        id
        name
        email
        cart {
          id
          quantity
          item {
            title
            price
            id
            description
          }
        }
      }
      `,
    );
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 
      0,
    );
    console.log(`charging ${amount}`);
    const charge = await stripe.charges.create({
      amount,
      currency: 'USD',
      source: args.token,
    });
    console.log(charge);
  },
};

module.exports = mutations;
