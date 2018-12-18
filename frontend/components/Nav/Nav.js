import Link from 'next/link';
import NavStyle from './NavStyle';

const Nav = () => (
  <NavStyle>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyle>
);

export default Nav;
