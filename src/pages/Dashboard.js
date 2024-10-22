import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      <div>
        <h2>Statistics</h2>
        <p>Here you can display user-specific data, statistics, or any other relevant information.</p>
      </div>

      <div>
        <h2>Quick Links</h2>
        <button onClick={() => alert('Navigating to Settings...')}>Go to Settings</button>
        <button onClick={() => alert('Navigating to Reports...')}>View Reports</button>
      </div>
    </div>
  );
};

export default Dashboard;
