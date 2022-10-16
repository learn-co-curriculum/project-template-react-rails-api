import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { FaUser,FaEnvelope,FaMap } from 'react-icons/fa';

function Trainers() {

  return (
    <>
      <div className="container">
      <h3 className='text-center text-primary rounded-0'>Trainers</h3> <hr></hr>
      <Card style={{padding:"20px",border:"2px solid #8A2BE2",borderRadius:"0px",backgroundColor:"#e7e1fa",color:"#000",margin:"10px"}}>
        <h5 className="font-weight-bold"> <FaUser /> Samuel Gitonga </h5>
        <h6><FaEnvelope /> samgitonga@yahoo.com   &nbsp; &nbsp; | <span> <FaMap /> Umoja III</span></h6>
        </Card>
        <Card style={{padding:"20px",border:"2px solid #8A2BE2",borderRadius:"0px",backgroundColor:"#e7e1fa",color:"#000",margin:"10px"}}>
        <h5 className="font-weight-bold"> <FaUser /> Cynthia Nafula  </h5>
        <h6><FaEnvelope /> cynthia.nafula@yahoo.com   &nbsp; &nbsp; | <span> <FaMap /> Lavington</span></h6>
        </Card>
    
    
    </div>
    </>
  );

}

export default Trainers;
