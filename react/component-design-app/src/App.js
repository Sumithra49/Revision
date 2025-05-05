import React from 'react';
import Greeting from './components/Greeting';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import UserDashboard from './components/UserDashboard';
import './App.css';


function App() {
  return (
    <div>
      <h1>React Component Design</h1>

      <h2>Greeting Examples:</h2>
      <div className="component-box">
  <Greeting name="John" timeOfDay="morning" />
  <Greeting name="Sarah" timeOfDay="afternoon" />
  <Greeting name="Alex" timeOfDay="evening" />
</div>
      <h2>User Profile:</h2>
      <UserProfile
        name="Jane Doe"
        email="jane@example.com"
        bio="Software engineer and writer."
        imageUrl="https://via.placeholder.com/100"
      />

      <h2>Dashboard (Conditional Rendering):</h2>
      <Dashboard isLoggedIn={true} />
      <Dashboard isLoggedIn={false} />

      <h2>User Dashboard:</h2>
      <UserDashboard
        isLoggedIn={true}
        name="Alice Smith"
        age={28}
        email="alice@example.com"
        bio="React Developer and blogger."
        imageUrl="https://via.placeholder.com/100"
      />

      <UserDashboard isLoggedIn={false} />
    </div>
  );
}

export default App;
