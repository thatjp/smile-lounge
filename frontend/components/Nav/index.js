import Link from 'next/link';
import NavStyle from './style';

const Nav = () => (
  <NavStyle>
    <Link href="/cart">
      <a>Cart</a>
    </Link>
    <Link href="/profile">
      <a>Account</a>
    </Link>
    <Link href="/signup">
      <a>signup</a>
    </Link>
  </NavStyle>
);

export default Nav;
