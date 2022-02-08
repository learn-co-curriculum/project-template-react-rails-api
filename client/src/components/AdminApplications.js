import React from 'react';
import Table from 'react-bootstrap/Table'

export default function AdminApplications({ currentUser, pets, applicants, setApplicants }) {
  return (
    <div id="admin_applicants">
      <h3>Pet Applications</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Approved?</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Rent or Own?</th>
            <th>Home Type</th>
            <th># Months at Address</th>
            <th>Yard Description</th>
            <th>Children?</th>
            <th>Pet Allergies?</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(a => (
            <tr>
              <td>{a.id}</td>
              <td>{a.approved ? "Yes" : "No"}</td>
              <td>{a.firstName}</td>
              <td>{a.lastName}</td>
              <td>{a.dob}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.rent_own}</td>
              <td>{a.home_type}</td>
              <td>{a.length_address}</td>
              <td>{a.yard_description}</td>
              <td>{a.children}</td>
              <td>{a.pet_allergy}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}