import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About DevBoard</h1>
        <p className="about-subtitle">Your personal dashboard for developer productivity</p>
      </div>
      
      <div className="about-content">
        <div className="about-card card">
          <h2>What is DevBoard?</h2>
          <p>
            DevBoard is a private dashboard designed for developers to keep track of their professional profile, 
            current status, and activities. It allows you to maintain a customized developer status message 
            and provides a clean interface to manage your developer identity.
          </p>
          
          <h2>Features</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <span className="feature-icon">🔐</span>
              <div className="feature-text">
                <h3>Authenticated Experience</h3>
                <p>Secure login system to protect your personal dashboard</p>
              </div>
            </li>
            <li className="feature-item">
              <span className="feature-icon">🌓</span>
              <div className="feature-text">
                <h3>Theme Switching</h3>
                <p>Toggle between light and dark themes based on your preference</p>
              </div>
            </li>
            <li className="feature-item">
              <span className="feature-icon">💬</span>
              <div className="feature-text">
                <h3>Status Updates</h3>
                <p>Share your current developer status with a custom message</p>
              </div>
            </li>
            <li className="feature-item">
              <span className="feature-icon">📊</span>
              <div className="feature-text">
                <h3>Activity Dashboard</h3>
                <p>View and manage your development activities in one place</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="tech-stack card">
          <h2>Technology Stack</h2>
          <p>DevBoard is built with modern web technologies:</p>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-name">React</span>
              <span className="tech-description">UI Library</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">React Router</span>
              <span className="tech-description">Navigation</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Context API</span>
              <span className="tech-description">State Management</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Axios</span>
              <span className="tech-description">API Client</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">CSS</span>
              <span className="tech-description">Styling</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">React Hooks</span>
              <span className="tech-description">Logic Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;