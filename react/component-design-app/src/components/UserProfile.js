import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

function UserProfile({ imageUrl, name, email, bio }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', width: '300px' }}>
      <Avatar imageUrl={imageUrl} altText={name} />
      <UserInfo name={name} email={email} bio={bio} />
    </div>
  );
}

export default UserProfile;
