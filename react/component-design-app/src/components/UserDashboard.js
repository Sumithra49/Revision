import React from 'react';
import UserProfile from './UserProfile';

function UserDashboard({ isLoggedIn, name, age, email, bio, imageUrl }) {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <UserProfile name={name} email={email} bio={bio} imageUrl={imageUrl} />
          <button style={{ marginTop: '10px' }}>Logout</button>
        </>
      ) : (
        <>
          <p>You need to log in.</p>
          <button>Login</button>
        </>
      )}
    </div>
  );
}

export default UserDashboard;
