import React from 'react';
import Table from 'react-bootstrap/Table'

export default function AdminPets({ currentUser, pets, setApplications }) {
  console.log("PETS NEEDING HOMES", pets)
  return (
    <div id="admin_pets">
      <h3>Rescue Pets</h3>
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