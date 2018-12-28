import React from 'react';
import Link from 'next/link';

const Profile = () => (
    <div>
      <p>Hey there from profile</p>
      <Link href="/calender">
        <a>Calender</a>
      </Link>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
    </div>
);

export default Profile;
