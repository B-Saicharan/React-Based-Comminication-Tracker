// src/pages/AdminPage.js
import React, { useState } from 'react';
import AddCompanyForm from '../components/AddCompanyForm';
import './AdminPage.css';  // Import the CSS for styling

function AdminPage() {
  const [companies, setCompanies] = useState([]);

  const addCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  return (
    <div className="admin-page">
      <h1 className="page-title">Admin Dashboard</h1>
      <AddCompanyForm addCompany={addCompany} />

      <div className="companies-list">
        <h2>Companies</h2>
        <ul>
          {companies.map((company, index) => (
            <li key={index} className="company-item">
              <div className="company-details">
                <strong>Company Name:</strong> {company.companyName}
              </div>
              <div className="company-details">
                <strong>Location:</strong> {company.location}
              </div>
              <div className="company-details">
                <strong>LinkedIn:</strong> {company.linkedin}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
