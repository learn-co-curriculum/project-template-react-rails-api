import React from 'react';
import Table from 'react-bootstrap/Table'

export default function Applications({ currentUser, applications }) {
  let userApps = applications.filter(app => app.applicant_id === currentUser.applicant_id);
  return (
    <div id="applications">
      <h3>Pet Application Status</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>App #</th>
            <th>App Status</th>
            <th>Pet</th>
            <th>Pet Status</th>
          </tr>
        </thead>
        <tbody>
          {userApps.map(app => (
            <tr>
              <td>{app.id}</td>
              <td>{app.status}</td>
              <td>{app.pet.name}</td>
              <td>{app.pet.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}