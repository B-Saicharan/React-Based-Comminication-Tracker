import React from 'react';

function Dashboard({ companies }) {
  return (
    <div>
      <h2>Communication Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Last Communications</th>
            <th>Next Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.companyName}</td>
              <td>{company.comments}</td>
              <td>{company.communicationPeriodicity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
