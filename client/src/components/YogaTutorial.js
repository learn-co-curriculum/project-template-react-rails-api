import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function YogaTutorial (){
  return (
     <div className="col-md-4 mt-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" />
      <Card.Body>
        <Card.Title>Cat-Cow to Awaken the Spine and Ease Back Pain
          <hr></hr>
</Card.Title>
        <Card.Text>
        Get on your mat on all fours with your hands directly below your shoulders and your knees directly below your hips. .
        </Card.Text>
        <Button className='rounded-0 btn-sm' variant="primary">Leave Review</Button>
      </Card.Body>
    </Card>
     </div>
  )
}
export default YogaTutorial;
