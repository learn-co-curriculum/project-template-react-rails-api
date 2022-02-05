import React from 'react';
import Table from 'react-bootstrap/Table'

export default function Applications() {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}