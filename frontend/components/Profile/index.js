import React from 'react';
import Link from 'next/link';
import ProfileStyles from './styles';

const Profile = () => (
  <ProfileStyles>
    <div className="container">
      {/* <h1>Hello</h1> */}
      <Link href="/calender">
        <div className="link one">
          <a>
            <h2>
              Calender
            </h2>
          </a>
        </div>
      </Link>
      <Link href="/settings">
        <div className="link two">
          <a>
            <h2>
              Settings
            </h2>
          </a>
        </div>
      </Link>
      <Link href="/documents">
        <div className="link 3">
          <a>
            <h2>
              Documents
            </h2>
          </a>
        </div>
      </Link>
      <Link href="/inbox">
        <div className="link 4">
          <a>
            <h2>
              Inbox
            </h2>
          </a>
        </div>
      </Link>
    </div>
  </ProfileStyles>
);

export default Profile;
