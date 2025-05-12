import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import './Login.css';

const Login = () => {
  const { login, loading, error } = useAuth();
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormError('');
    
    try {
      const result = await login();
      if (result.success) {
        navigate('/dashboard');
      } else {
        setFormError('Login failed. Please try again.');
      }
    } catch (err) {
      setFormError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card card">
        <h1 className="login-title">Welcome to DevBoard</h1>
        <p className="login-subtitle">Your personal developer dashboard</p>
        
        <form onSubmit={handleLogin} className="login-form">
          {(formError || error) && (
            <div className="error-message">
              {formError || error}
            </div>
          )}
          
          <p className="login-info">
            This demo uses JSONPlaceholder API to simulate a login.
            No real credentials required.
          </p>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>In a real application, this would have actual authentication.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;