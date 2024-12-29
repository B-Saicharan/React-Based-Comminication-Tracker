import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        LinkedIn Profile:
        <input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
      </label>
      <label>
        Emails:
        <input type="text" value={emails} onChange={(e) => setEmails(e.target.value)} />
      </label>
      <label>
        Phone Numbers:
        <input type="text" value={phoneNumbers} onChange={(e) => setPhoneNumbers(e.target.value)} />
      </label>
      <label>
        Comments:
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </label>
      <label>
        Communication Periodicity:
        <input type="text" value={communicationPeriodicity} onChange={(e) => setCommunicationPeriodicity(e.target.value)} />
      </label>
      <button type="submit">Add Company</button>
    </form>
  );
}

export default AddCompanyForm;
