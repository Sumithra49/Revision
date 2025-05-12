import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import './UserProfileCard.css';

const UserProfileCard = () => {
  const { user, updateUser } = useAuth();
  const [statusMessage, setStatusMessage] = useState(user?.statusMessage || '');
  const [isEditing, setIsEditing] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const statusInputRef = useRef(null);
  const emailRef = useRef(null);

  const handleEditStatus = () => {
    setIsEditing(true);
    // Use useRef to focus the input field when Edit Status is clicked
    setTimeout(() => {
      statusInputRef.current?.focus();
    }, 10);
  };

  const handleSaveStatus = (e) => {
    e.preventDefault();
    updateUser({ statusMessage });
    setIsEditing(false);
    
    // Show success toast
    const toast = document.createElement('div');
    toast.classList.add('toast', 'success');
    toast.textContent = 'Status updated successfully!';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  };

  const copyEmail = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent;
      navigator.clipboard.writeText(email).then(() => {
        setShowCopyToast(true);
        setTimeout(() => setShowCopyToast(false), 2000);
      });
    }
  };

  if (!user) return null;

  return (
    <div className="profile-card card">
      <div className="profile-header">
        <h2 className="profile-name">{user.name}</h2>
        {user.company && (
          <div className="company-badge badge">
            {user.company.name}
          </div>
        )}
      </div>
      
      <div className="profile-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value email" ref={emailRef}>{user.email}</span>
          <button 
            className="copy-btn" 
            onClick={copyEmail}
            aria-label="Copy email to clipboard"
          >
            Copy
          </button>
          {showCopyToast && (
            <div className="copy-toast">Email copied!</div>
          )}
        </div>
        
        {user.company && (
          <div className="info-item">
            <span className="info-label">Company:</span>
            <span className="info-value">{user.company.name}</span>
          </div>
        )}
        
        {user.website && (
          <div className="info-item">
            <span className="info-label">Website:</span>
            <a 
              href={`https://${user.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-value link"
            >
              {user.website}
            </a>
          </div>
        )}
      </div>
      
      <div className="status-section">
        <h3 className="status-title">Developer Status</h3>
        
        {isEditing ? (
          <form onSubmit={handleSaveStatus} className="status-form">
            <input
              type="text"
              value={statusMessage}
              onChange={(e) => setStatusMessage(e.target.value)}
              placeholder="What's your current developer status?"
              className="status-input"
              ref={statusInputRef}
              maxLength={100}
            />
            <div className="status-actions">
              <button type="submit" className="save-btn">Save</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => {
                  setIsEditing(false);
                  setStatusMessage(user.statusMessage || '');
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="status-display">
            <p className="status-message">"{user.statusMessage || 'No status set'}"</p>
            <button onClick={handleEditStatus} className="edit-btn">
              Edit Status
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;