import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                
                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </main>
            <footer className="footer">
              <div className="footer-content">
                <p>© 2025 DevBoard - Developer Dashboard</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;