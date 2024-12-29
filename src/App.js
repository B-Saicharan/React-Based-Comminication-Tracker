import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import './App.css'; // Importing a CSS file for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Default Landing Page Route */}
          <Route
            path="/"
            element={
              <div className="landing-page">
                <h1 className="title">Welcome to the Communication Tracker</h1>
                <p className="subtitle">Choose your role to get started</p>

                <div className="buttons-container">
                  <Link to="/admin" className="button-link">
                    <button className="action-button admin-button">Admin</button>
                  </Link>
                  <Link to="/user" className="button-link">
                    <button className="action-button user-button">User</button>
                  </Link>
                </div>
              </div>
            }
          />

          {/* Admin Page Route */}
          <Route path="/admin" element={<AdminPage />} />

          {/* User Page Route */}
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
