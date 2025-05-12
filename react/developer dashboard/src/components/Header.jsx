import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import './Header.css';
import ThemeToggle from './ThemeToggle.jsx';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">DevBoard</span>
        </Link>
        
        <nav className="nav">
          <ul className="nav-list">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link 
                    to="/dashboard" 
                    className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
                  >
                    Dashboard
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link 
                  to="/login" 
                  className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                >
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <ThemeToggle />
          {isAuthenticated && (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;