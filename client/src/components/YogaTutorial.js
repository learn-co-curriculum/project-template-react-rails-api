import React,{UseState,UseEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function YogaTutorial(){
  const [yogatutorials, setYogaTutorails] = useState([])
  useEffect(() => {
    const getYogaTutorials = async () => {
    const YogaTutorials = await fetchYogaTutorials()
    setYogaTutorails(YogaTutorials)
    }
    getYogaTutorials()
}, [])

const fetchYogaTutorials = async () => {
  const res = await fetch('/yoga')
  const data = await res.json()
  return data
}
if(yogatutorials.length >0){
  return (
  //   {yogatutorials.map((tutorial, index) => (
  //   <div className="col-md-4 mt-4" key={index} yogatutorials={tutorial}  onDelete={deleteTutorial}>
  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src={tutorial.description} />
  //     <Card.Body>
  //       <Card.Title>{tutorial.name}
  //         <hr></hr>
  // </Card.Title>
  //       <Card.Text>
  //       {tutorial.description}
  //       </Card.Text>
  //       <Button className='rounded-0 btn-sm' variant="primary">Rating</Button>
  //     </Card.Body>
  //   </Card>
  //    </div>
  //        ))}
  // )

  //   }else {
  //   'No tutorials available for now'
  //   }}




    
const YogaTutorial = ({ tutorial, onDelete }) => {
  return (
  <div className="col-md-4 mt-4" >
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={tutorial.description} />
  <Card.Body>
  <Card.Title>{tutorial.name}
  <hr></hr>
  </Card.Title>
  <Card.Text>
  {tutorial.description}
  </Card.Text>
  <Button className='rounded-0 btn-sm' variant="primary">Rating</Button>
  </Card.Body>
  </Card>
  </div>
)
}

export default YogaTutorial;
