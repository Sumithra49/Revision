import React, { useContext, useRef, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import UserProfileCard from '../components/UserProfileCard';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const inputRef = useRef();
  const [status, setStatus] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  if (!user) return <p>Please login to see your dashboard</p>;

  return (
    <div className="page">
      <h2>Developer Dashboard</h2>
      <UserProfileCard user={user} />
      <button onClick={logout}>Logout</button>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Update your status"
        />
        <button type="submit">Update Status</button>
      </form>

      <button onClick={handleFocus}>Edit Status</button>

      {showToast && <div className="toast">Status Updated!</div>}
    </div>
  );
};

export default Dashboard;
