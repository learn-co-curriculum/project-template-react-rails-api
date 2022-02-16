import React from 'react';
// import Table from 'react-bootstrap/Table';

export default function Applications({ currentUser, applications }) {
  let userApps = applications.filter(app => app.applicant_id === currentUser.applicant_id);
  
  return (
    <div id="applications">
      <h3 className="pageName">Pet Application Status</h3>
      <table className="dataTable">
        {/* <thead> */}
          <tr className="dataTable">
            <th className="dataTable">App #</th>
            <th className="dataTable">App Status</th>
            <th className="dataTable">Picture</th>
            <th className="dataTable">Pet Status</th>
            <th className="dataTable">Pet</th>
          </tr>
        {/* </thead> */}
        {/* <tbody> */}
          {userApps.map(app => (
            <tr className="dataTable">
              <td className="dataTable">{app.id}</td>
              <td className="dataTable">{app.status}</td>
              <td className="dataTable">
                <img alt={app.pet.id} src={app.pet.image} height="50px"/>
              </td>
              <td className="dataTable">{app.pet.status}</td>
              <td className="dataTable">{app.pet.name}, {app.pet.age}, {app.pet.breed}</td>
            </tr>
          ))}
        {/* </tbody> */}
      </table>
    </div>
  )
}