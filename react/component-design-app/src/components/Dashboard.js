import React from 'react';
import LoginMessage from './LoginMessage';

function Dashboard({ isLoggedIn }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <LoginMessage isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Dashboard;
