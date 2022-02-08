import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminPets({ pets, setApplications }) {
  const [modalShow, setModalShow] = React.useState(false);
  // const [name, setName] = useState();
  // const [status, setStatus] = useState("Intake");
  // const [image, setImage] = useState("http://localhost:4000/images/defaultPet.png");
  // const [species, setSpecies] = useState("n/a");
  // const [breed, setBreed] = useState("n/a");
  // const [age, setAge] = useState("n/a");
  // const [height, setHeight] = useState("n/a");
  // const [weight, setWeight] = useState("n/a");
  // const [fixed, setFixed] = useState();
  // const [energy_level, setEnergyLevel] = useState("n/a");
  // const [coat_type, setCoatType] = useState("n/a");
  // const [coat_color, setCoatColor] = useState("n/a");
  // const [good_w_kids, setGoodWKids] = useState();
  // const [good_w_cats, setGoodWCats] = useState();
  // const [behavioral_issues, setBehavioralIssues] = useState();
  // const [description, setDescription] = useState("n/a");
  // const [rabies_vaccine, setRabiesVaccine] = useState("n/a");
  // const [FVRCP_vaccine, setFVRCPVaccine] = useState("n/a");
  // const [distemper_parvo_vaccine, setDistemperParvoVaccine] = useState("n/a");
  // const [dewormed, setDewormed] = useState();

  function AddPetModal(props) {
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
            Add Pet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="string" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div id="admin_pets">
      <h3>Rescue Pets</h3>

      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Pet
        </Button>

        <AddPetModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pet #</th>
            <th>Status</th>
            <th>Foster</th>
            <th>Name</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Fixed</th>
            <th>Energy Level</th>
            <th>Coat Type</th>
            <th>Good w Kids?</th>
            <th>Good w Cats?</th>
            <th>Behavioral Issues?</th>
            <th>Rabies Vaccine</th>
            <th>FVRCP Vaccine (cat only)</th>
            <th>Distemper/Parvo Vaccine</th>
            <th>Dewormed?</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr>
              <td>{pet.id}</td>
              <td>{pet.status}</td>
              <td>
                {pet.foster[0].first_name} {pet.foster[0].last_name}
              </td>
              <td>{pet.name}</td>
              <td>{pet.species}</td>
              <td>{pet.breed}</td>
              <td>{pet.age}</td>
              <td>{pet.height}</td>
              <td>{pet.weight}</td>
              <td>{pet.fixed ? "Yes" : "No"}</td>
              <td>{pet.energy_level}</td>
              <td>{pet.coat_type}</td>
              <td>{pet.good_w_kids ? "Yes" : "No"}</td>
              <td>{pet.good_w_cats ? "Yes" : "No"}</td>
              <td>{pet.behavioral_issues ? "Yes" : "No"}</td>
              <td>{pet.rabies_vaccine}</td>
              <td>{pet.species === "Cat" ? pet.FVRCP_vaccine : "---"}</td>
              <td>{pet.distemper_parvo_vaccine}</td>
              <td>{pet.dewormed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}