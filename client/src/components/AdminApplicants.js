import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplicants({ pets, applicants, setApplicants }) {
  const [modalShow, setModalShow] = React.useState(false);

  //APPLICANT SHOULD BE EDIT ONLY!

  function editApplicant(e, a) {
    console.log("editApplicant() has been invoked!");
  }

  return (
    <div id="admin_applicants">
      <h3>Applicants</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Edit</th>
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
              <td><a onClick={(e, a)=>{editApplicant(e, a)}}>Edit</a></td>
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