import React from 'react';
import Link from 'next/link';
import FooterStyle from './styles';

const Footer = () => (
  <FooterStyle>
    <div>
      <ul>
        <h2>Navigation</h2>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>Products</li>
      </ul>
    </div>
    <div>
      <ul>
        <h2>More</h2>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </li>
        <li>Search</li>
      </ul>
    </div>
    <div>
      <ul>
        <h2>Smile Lounge</h2>
        <li>
          <p className="paragraph--footer">
            A premiere straightening
            service dedicated to comfort
            and convenience.
          </p>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <h2>Follow Us</h2>
        <li>
          Instagram
        </li>
        <li>
          Facebook
        </li>
        <li>
          LinkedIn
        </li>
        <li>
          Twitter
        </li>
      </ul>
    </div>
  </FooterStyle>
);

export default Footer;