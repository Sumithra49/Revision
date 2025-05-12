import { useTheme } from '../contexts/ThemeContext.jsx';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button 
      className="theme-toggle-btn" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <span className="toggle-icon">☀️</span>
      ) : (
        <span className="toggle-icon">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;