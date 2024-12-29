// src/pages/UserPage.js
import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import CalendarView from '../components/CalendarView';
import './UserPage.css';  // Import the CSS for styling

function UserPage() {
  const [companies, setCompanies] = useState([
    {
      companyName: 'Tech Innovations',
      comments: 'Last communication: LinkedIn Message on 15th Dec.',
      communicationPeriodicity: '2 weeks',
    },
    {
      companyName: 'Creative Solutions',
      comments: 'Last communication: Email on 10th Dec.',
      communicationPeriodicity: '1 week',
    },
    {
      companyName: 'Business Partners',
      comments: 'Last communication: Phone Call on 5th Dec.',
      communicationPeriodicity: '3 weeks',
    },
  ]);

  return (
    <div className="user-page">
      <h1 className="page-title">User Dashboard</h1>

      <Dashboard companies={companies} />

      <div className="calendar-section">
        <h2>Communication Calendar</h2>
        <CalendarView />
      </div>
    </div>
  );
}

export default UserPage;
