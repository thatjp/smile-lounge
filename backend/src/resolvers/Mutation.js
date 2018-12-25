const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mutations = {

  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
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

};

module.exports = mutations;
