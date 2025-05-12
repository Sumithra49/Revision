import React, { useRef } from 'react';

const UserProfileCard = ({ user }) => {
  const emailRef = useRef();

  const handleCopy = () => {
    emailRef.current.select();
    document.execCommand('copy');
    alert('Email copied!');
  };

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <input readOnly ref={emailRef} value={user.email} />
      <button onClick={handleCopy}>Copy Email</button>
      <p>
        Company: <span className="badge">{user.company.name}</span>
      </p>
    </div>
  );
};

export default UserProfileCard;
