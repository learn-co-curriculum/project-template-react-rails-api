import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminPets({ pets, setPets }) {
  const [modalShow, setModalShow] = React.useState(false);

  const [showAddPet, setShowAddPet] = useState(false);
  const [showEditPet, setShowEditPet] = useState(false);
  const [name, setName] = useState();
  const [status, setStatus] = useState("Intake Pending");
  const [image, setImage] = useState("http://localhost:4000/images/defaultPet.png");
  const [species, setSpecies] = useState("n/a");
  const [breed, setBreed] = useState("n/a");
  const [age, setAge] = useState("n/a");
  const [height, setHeight] = useState("n/a");
  const [weight, setWeight] = useState("n/a");
  const [fixed, setFixed] = useState();
  const [energy_level, setEnergyLevel] = useState("n/a");
  const [coat_type, setCoatType] = useState("n/a");
  const [coat_color, setCoatColor] = useState("n/a");
  const [good_w_kids, setGoodWKids] = useState();
  const [good_w_cats, setGoodWCats] = useState();
  const [behavioral_issues, setBehavioralIssues] = useState();
  const [description, setDescription] = useState("n/a");
  const [rabies_vaccine, setRabiesVaccine] = useState("n/a");
  const [FVRCP_vaccine, setFVRCPVaccine] = useState("n/a");
  const [distemper_parvo_vaccine, setDistemperParvoVaccine] = useState("n/a");
  const [dewormed, setDewormed] = useState();

  function addPet(e) {
    // e.preventDefault();
    console.log("target[0]", e.target[0].value)
    console.log("target[1]", e.target[1].value)
    console.log("target[2]", e.target[2].value)
    console.log("target[3]", e.target[3].value)
    console.log("target[4]", e.target[4].value)
    console.log("target[5]", e.target[5].value)
    console.log("target[6]", e.target[6].value)
    console.log("target[7]", e.target[7].value)
    console.log("target[8]-Coat Color?", e.target[8].value)
    console.log("target[9]-Good Kids", e.target[9].value)
    console.log("target[10]-Good Cats", e.target[10].value)
    console.log("target[11]-Beh Issues", e.target[11].value)
    console.log("target[12]-Dewormed", e.target[12].value)
    console.log("target[13]-Fixed", e.target[13].value)
    console.log("target[14]-Rabies", e.target[14].value)
    console.log("target[15]-Dist/parvo", e.target[15].value)
    console.log("target[16]-FVRCP", e.target[16].value)
    console.log("target[17]-Desc", e.target[17].value)

    fetch("/pets", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: e.target[0].value,
        status, image,
        species: e.target[1].value, 
        breed: e.target[2].value,
        age: e.target[3].value,
        height: e.target[4].value, 
        weight: e.target[5].value,
        energy_level: e.target[6].value,
        coat_type: e.target[7].value, 
        coat_color: e.target[8].value,
        good_w_kids: e.target[9].value, 
        good_w_cats: e.target[10].value, 
        behavioral_issues: e.target[11].value,
        dewormed: e.target[12].value,
        fixed: e.target[13].value, 
        rabies_vaccine: e.target[14].value, 
        distemper_parvo_vaccine: e.target[15].value,
        FVRCP_vaccine: e.target[16].value, 
        description: e.target[17].value,
      })
    })
    .then((r)=> {})
  }

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
          <Form onSubmit={(e)=>{addPet(e)}}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="string" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Species</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control type="string" placeholder="Enter breed" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="string" placeholder="Enter age" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control type="string" placeholder="in inches" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="string" placeholder="in lbs" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Energy Level</Form.Label>
                <Form.Select>
                  <option>Choose...</option>
                  <option>Couch potato</option>
                  <option>Low</option>
                  <option>Low-Medium</option>
                  <option>Medium</option>
                  <option>Medium-High</option>
                  <option>High</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Coat Type</Form.Label>
                <Form.Select>
                  <option>Choose...</option>
                  <option>Short hair</option>
                  <option>Medium hair</option>
                  <option>Long Hair</option>
                  <option>Double-Coated</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Coat Color</Form.Label>
                <Form.Control type="string" placeholder="Enter coat color(s)" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                {/* <Form.Label>Good with Kids?</Form.Label>
                <Form.Control type="string" placeholder="Enter age" /> */}
                <Form.Check type="checkbox" label="Good with kids?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                {/* <Form.Label>Good with Cats?</Form.Label> */}
                <Form.Check type="checkbox" label="Good with cats?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                {/* <Form.Label>Any Behavior Issues?</Form.Label>
                <Form.Control type="string" placeholder="Enter coat color(s)" /> */}
                <Form.Check type="checkbox" label="Any Behavior Issues?" />
              </Form.Group>
            {/* </Row>

            <Row className="mb-3"> */}
              <Form.Group as={Col} controlId="formGridDewormed">
                <Form.Check type="checkbox" label="Dewormed?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFixed">
                <Form.Check type="checkbox" label="Fixed?" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridRabies">
                <Form.Label>Rabies Vaccine</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRabies">
                <Form.Label>Distemper/Parvo Vaccine</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFVRCP">
                <Form.Label>FVRCP Vaccine (cat only)</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description of Personality/Temperment or Behavioral Issues</Form.Label>
              <Form.Control as="textarea" rows={2}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  function editPet(e) {
    console.log("editPet() has been invoked!", e);
  }

  function EditPetModal(props) {
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
            Edit Pet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form onSubmit={(e)=>{addPet(e)}}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="string" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Species</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control type="string" placeholder="Enter breed" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="string" placeholder="Enter age" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control type="string" placeholder="in inches" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="string" placeholder="in lbs" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Energy Level</Form.Label>
                <Form.Control type="string" placeholder="Enter age" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Coat Type</Form.Label>
                <Form.Select>
                  <option>Choose...</option>
                  <option>Short hair</option>
                  <option>Medium hair</option>
                  <option>Long Hair</option>
                  <option>Double-Coated</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Coat Color</Form.Label>
                <Form.Control type="string" placeholder="Enter coat color(s)" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                {/* <Form.Label>Good with Kids?</Form.Label>
                <Form.Control type="string" placeholder="Enter age" /> */}
                <Form.Check type="checkbox" label="Good with kids?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                {/* <Form.Label>Good with Cats?</Form.Label> */}
                <Form.Check type="checkbox" label="Good with cats?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                {/* <Form.Label>Any Behavior Issues?</Form.Label>
                <Form.Control type="string" placeholder="Enter coat color(s)" /> */}
                <Form.Check type="checkbox" label="Any Behavior Issues?" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Rabies Vaccine</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>FVRCP Vaccine (cat only)</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Check type="checkbox" label="Dewormed?" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description of Personality/Temperment or Behavioral Issues</Form.Label>
              <Form.Control as="textarea" rows={1}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  return (
    <div id="admin_pets">
      <h3>Rescue Pets</h3>

      <>
        <Button variant="primary" onClick={() => setShowAddPet(true)}>
          Add Pet
        </Button>

        <AddPetModal
          show={showAddPet}
          onHide={() => setShowAddPet(false)}
        />
      </>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Edit</th>
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
              <td>
                <Button onClick={() => setShowEditPet(true)}>
                  Edit
                </Button>

                <EditPetModal
                  show={showEditPet}
                  onHide={() => setShowEditPet(false)}
                />              
              </td>
              <td>{pet.id}</td>
              <td>{pet.status}</td>
              <td>
                {/* {pet.foster[0].first_name} {pet.foster[0].last_name} */}
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