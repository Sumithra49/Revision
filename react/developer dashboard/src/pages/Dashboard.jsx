import { useEffect, useState } from 'react';
import UserProfileCard from '../components/UserProfileCard.jsx';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, loading, error } = useAuth();
  const [loadingData, setLoadingData] = useState(true);
  
  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingData(false);
    }, 800); // Simulate a small loading delay
    
    return () => clearTimeout(timer);
  }, []);
  
  // Log to console whenever dashboard is rendered (useEffect example)
  useEffect(() => {
    console.log('Dashboard rendered', new Date().toISOString());
    
    return () => {
      console.log('Dashboard unmounted', new Date().toISOString());
    };
  }, []);

  // Conditional rendering based on auth state and loading
  if (loading || loadingData) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading your data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <p>Failed to load profile: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="dashboard-error">
        <p>Please login to see your dashboard</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Developer Dashboard</h1>
        <p className="dashboard-welcome">Hello, {user.name}! Here's your personal developer space.</p>
      </div>

      <UserProfileCard />
      
      <div className="dashboard-stats">
        <div className="stats-card card">
          <h3>Your Activity</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">12</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">156</span>
              <span className="stat-label">Commits</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">23</span>
              <span className="stat-label">Pull Requests</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">7</span>
              <span className="stat-label">Issues</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;