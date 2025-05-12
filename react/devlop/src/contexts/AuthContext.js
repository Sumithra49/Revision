import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      setUser(res.data);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('isAuthenticated', 'true');
    } catch (err) {
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
