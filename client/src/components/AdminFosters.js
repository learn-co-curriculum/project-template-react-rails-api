import React from 'react';
import Table from 'react-bootstrap/Table'

export default function AdminFosters({ currentUser, pets, applicants, setApplicants }) {
  // console.log("WHAT IS APPLICANTS IN ADMINAPPLICATIONS", applicants)
  return (
    <div id="admin_applicants">
      <h3>Pet Applications</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          {/* {applicants.map(a => (
            <tr>
              <td>{a.id}</td>
              <td>{a.firstName}</td>
              <td>{a.lastName}</td>
              <td>{a.id}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>

    </div>
  )
}