import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplicants({ pets, applicants, setApplicants }) {
  const [showEditApplicant, setShowEditApplicant] = useState(false);
  const [applicantToUpdate, setApplicantToUpdate] = useState({id: "", firstName: "", lastName: "", dob: "", email: "", phone: "", rent_own: "", home_type: "", length_address: "", yard_description: "", children: "", pet_allergy: "", approved: false, lifestyle: ""})

  //APPLICANT SHOULD BE EDIT ONLY!
  function editApplicant(e) {
    let appObj = {};

    if (e.target[0].value === "") {
      appObj["firstName"] = applicantToUpdate.firstName;
    } else if(e.target[0].value.toLowerCase() !== applicantToUpdate.firstName.toLowerCase()) {
      appObj["firstName"] = e.target[0].value;
    } 

    if (e.target[1].value === "") {
      appObj["lastName"] = applicantToUpdate.lastName;
    } else if(e.target[1].value.toLowerCase() !== applicantToUpdate.lastName.toLowerCase()) {
      appObj["lastName"] = e.target[1].value;
    } 

    if (e.target[2].value === "") {
      appObj["dob"] = applicantToUpdate.dob;
    } else if(e.target[2].value.toLowerCase() !== applicantToUpdate.dob.toLowerCase()) {
      appObj["dob"] = e.target[2].value;
    } 

    if (e.target[3].value === "") {
      appObj["email"] = applicantToUpdate.email;
    } else if(e.target[3].value.toLowerCase() !== applicantToUpdate.email.toLowerCase()) {
      appObj["email"] = e.target[3].value;
    } 

    if (e.target[4].value === "") {
      appObj["phone"] = applicantToUpdate.phone;
    } else if(e.target[4].value.toLowerCase() !== applicantToUpdate.phone.toLowerCase()) {
      appObj["phone"] = e.target[4].value;
    } 

    if (e.target[5].value === "") {
      appObj["rent_own"] = applicantToUpdate.rent_own;
    } else if(e.target[5].value.toLowerCase() !== applicantToUpdate.rent_own.toLowerCase()) {
      appObj["rent_own"] = e.target[5].value;
    } 

    if (e.target[6].value === "") {
      appObj["home_type"] = applicantToUpdate.home_type;
    } else if(e.target[6].value.toLowerCase() !== applicantToUpdate.home_type.toLowerCase()) {
      appObj["home_type"] = e.target[6].value;
    } 

    if (e.target[7].value === "") {
      appObj["pet_allergy"] = applicantToUpdate.pet_allergy;
    } else if(e.target[7].value.toLowerCase() !== applicantToUpdate.pet_allergy.toLowerCase()) {
      appObj["pet_allergy"] = e.target[7].value;
    } 

    if (e.target[8].value === "") {
      appObj["length_address"] = applicantToUpdate.length_address;
    } else if(e.target[8].value.toLowerCase() !== applicantToUpdate.length_address.toLowerCase()) {
      appObj["length_address"] = e.target[8].value;
    } 

    if (e.target[9].value === "") {
      appObj["children"] = applicantToUpdate.children;
    } else if(e.target[9].value.toLowerCase() !== applicantToUpdate.children.toLowerCase()) {
      appObj["children"] = e.target[9].value;
    } 

    if (e.target[10].value === "") {
      appObj["yard_description"] = applicantToUpdate.yard_description;
    } else if(e.target[10].value.toLowerCase() !== applicantToUpdate.yard_description.toLowerCase()) {
      appObj["yard_description"] = e.target[10].value;
    } 

    if (e.target[11].value === "") {
      appObj["lifestyle"] = applicantToUpdate.lifestyle;
    } else if(e.target[11].value.toLowerCase() !== applicantToUpdate.lifestyle.toLowerCase()) {
      appObj["lifestyle"] = e.target[11].value;
    } 

    // APPROVED? need to translate "Yes" and "No" into true and false
    let approved;
    if (e.target[12].value === "Yes") {
      approved = true;
    } else if (e.target[12].value === "No") {
      approved = false
    }

    if (approved === "") {
      appObj["approved"] = applicantToUpdate.approved;
    } else if(approved !== applicantToUpdate.approved) {
      appObj["approved"] = approved;
    } 

    fetch(`/applicants/${applicantToUpdate.id}`, {
      method: "PATCH", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(appObj)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(applicant => {
          console.log("PATCH /applicants success!", applicant)
        })
      } else {
        r.json().then((err) => {
        console.log("PATCH applicants error", err);
      })
      }
    })
  }

  function EditApplicantModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Applicant
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={(e)=> editApplicant(e)}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="string" placeholder={applicantToUpdate.firstName} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="string" placeholder={applicantToUpdate.lastName} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridDOB">
                  <Form.Label>DOB</Form.Label>
                  <Form.Control type="string" placeholder={applicantToUpdate.dob} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder={applicantToUpdate.email} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder={applicantToUpdate.phone} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridRentOwn">
                  <Form.Label>Rent or Own?</Form.Label>
                  <Form.Select >
                    <option>{applicantToUpdate.rent_own}</option>
                    <option>Rent</option>
                    <option>Own</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridHomeType">
                  <Form.Label>Home Type</Form.Label>
                  <Form.Select >
                    <option>{applicantToUpdate.home_type}</option>
                    <option>Single Family Home</option>
                    <option>Condo</option>
                    <option>Apartment</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPetAllergy">
                  <Form.Label>Any Pet allergies?</Form.Label>
                  <Form.Select >
                    <option>{applicantToUpdate.pet_allergy ? "Yes" : "No"}</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddressHistory">
                  <Form.Label># Months at Address?</Form.Label>
                  <Form.Control type="string" placeholder={applicantToUpdate.length_address} />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Do you have children?</Form.Label>
                <Form.Control type="string" placeholder={applicantToUpdate.children}  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Yard Description</Form.Label>
                <Form.Control as="textarea" rows={1} placeholder={applicantToUpdate.yard_description}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>What's your lifestyle?</Form.Label>
                <Form.Control as="textarea" rows={1} placeholder={applicantToUpdate.lifestyle}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRentOwn">
                  <Form.Label>Approved?</Form.Label>
                  <Form.Select >
                    <option>{applicantToUpdate.approved ? "Yes" : "No"}</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>

              <br/>

              <Button type="submit"
                class="btn btn-large" 
                style={{ backgroundColor: "#f4805c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
              >
                Update
              </Button>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function openEditApplicantModal(applicant) {
    setApplicantToUpdate(applicant);
    setShowEditApplicant(true);
  }

  return (
    <div id="admin_applicants">
      <h3 className="pageName">Applicants</h3>
      <div style={{overflowX: "auto", width: "83%", marginLeft: "auto", marginRight: "auto"}}>
        <table className="dataTable">
          {/* <thead> */}
            <tr className="dataTableHeader">
              <th className="dataTableHeader">Edit</th>
              <th className="dataTableHeader">id</th>
              <th className="dataTableHeader">Approved?</th>
              <th className="dataTableHeader">Name</th>
              {/* <th className="dataTableHeader">Last Name</th> */}
              <th className="dataTableHeader">DOB</th>
              <th className="dataTableHeader">Email</th>
              <th className="dataTableHeader">Phone</th>
              <th className="dataTableHeader">Rent or Own?</th>
              <th className="dataTableHeader">Home Type</th>
              <th className="dataTableHeader"># Months at Address</th>
              <th className="dataTableHeader">Yard Description</th>
              <th className="dataTableHeader">Children?</th>
              <th className="dataTableHeader">Pet Allergies?</th>
            </tr>
          {/* </thead>
          <tbody> */}
            {applicants.map(a => (
              <tr key={a.id} className="dataTable">
                <td className="dataTable">
                  <Button onClick={() => openEditApplicantModal(a)}
                    class="btn btn-large"
                    style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
                  >
                    Edit
                  </Button>

                  <EditApplicantModal
                    show={showEditApplicant}
                    onHide={() => setShowEditApplicant(false)}
                  />
                
                </td>
                <td className="dataTable">{a.id}</td>
                <td className="dataTable">{a.approved ? "Yes" : "No"}</td>
                <td className="dataTable">{a.firstName} {a.lastName}</td>
                {/* <td className="dataTable">{a.lastName}</td> */}
                <td className="dataTable">{a.dob}</td>
                <td className="dataTable">{a.email}</td>
                <td className="dataTable">{a.phone}</td>
                <td className="dataTable">{a.rent_own}</td>
                <td className="dataTable">{a.home_type}</td>
                <td className="dataTable">{a.length_address}</td>
                <td className="dataTable">{a.yard_description}</td>
                <td className="dataTable">{a.children}</td>
                <td className="dataTable">{a.pet_allergy}</td>
              </tr>
            ))}
          {/* </tbody> */}
        </table>
      </div>
    </div>
  )
}