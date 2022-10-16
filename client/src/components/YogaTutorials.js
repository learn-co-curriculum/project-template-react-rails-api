import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div className='row'>
      <h4>Featured Yoga Tutorials</h4>
  {products.map((product) => (
    <div className="col-md-4 mt-4"key={product.id} >
    <Card  >
    <Card.Img variant="top"style={{ height: '18rem' ,padding:"15px"}} src={product.image} />
    <Card.Body>
    <Card.Title>{product.brand}   <hr></hr> </Card.Title>
    <Card.Text>
    {product.item}
    </Card.Text>
    <Button className='rounded-0 btn btn-dark btn-md' variant="primary">Rate</Button>
    <Button className='rounded-0 btn btn-primary btn-md' variant="primary">Watch</Button>
    </Card.Body>
    </Card>
    </div>
        ))}
      </div>
 



  );
};
export default FeaturedProducts;