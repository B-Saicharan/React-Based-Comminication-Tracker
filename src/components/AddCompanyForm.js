// src/components/AddCompanyForm.js
import React, { useState } from 'react';
import './AddCompanyForm.css';  // Importing the CSS file for styling

function AddCompanyForm({ addCompany }) {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [emails, setEmails] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [comments, setComments] = useState('');
  const [communicationPeriodicity, setCommunicationPeriodicity] = useState('2 weeks');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompany = {
      companyName,
      location,
      linkedIn,
      emails,
      phoneNumbers,
      comments,
      communicationPeriodicity,
    };
    addCompany(newCompany);
  };

  return (
    <form className="add-company-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Company Name:</label>
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </div>

      <div className="form-field">
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>

      <div className="form-field">
        <label>LinkedIn:</label>
        <input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
      </div>

      <div className="form-field">
        <label>Emails:</label>
        <input type="text" value={emails} onChange={(e) => setEmails(e.target.value)} />
      </div>

      <div className="form-field">
        <label>Phone Numbers:</label>
        <input type="text" value={phoneNumbers} onChange={(e) => setPhoneNumbers(e.target.value)} />
      </div>

      <div className="form-field">
        <label>Comments:</label>
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </div>

      <div className="form-field">
        <label>Communication Periodicity:</label>
        <input type="text" value={communicationPeriodicity} onChange={(e) => setCommunicationPeriodicity(e.target.value)} />
      </div>

      <button type="submit">Add Company</button>
    </form>
  );
}

export default AddCompanyForm;
