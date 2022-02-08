import React from 'react';
import Table from 'react-bootstrap/Table'

export default function AdminFosters({ fosters, setFosters }) {
  console.log("FOSTERS IN AdminFosters", fosters)

  return (
    <div id="admin_fosters">
      <h3>Fosters</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          {fosters.map(f => (
            <tr>
              <td>{f.id}</td>
              <td>{f.first_name}</td>
              <td>{f.last_name}</td>
              <td>{f.phone}</td>
              <td>{f.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}