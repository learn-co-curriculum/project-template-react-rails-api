// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/Signup'
import Login from './components/Login'
import BookDetail from './components/BookDetails'


function App() {
  const [books, setBooks] = useState([])
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null);

  //Fetch Books
  useEffect(() => {
    fetchBooks()
  },[])

  const fetchBooks = () => {
    fetch('/books')
    .then(res => {
      if(res.ok){
        res.json().then(setBooks)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  //Fetch Reviews
  useEffect(() => {
    fetchReviews()
  },[])

  const fetchReviews = () => {
    fetch('/reviews')
    .then(res => {
      if(res.ok){
        res.json().then(setReviews)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  // const deleteReview = (id) => setReviews(current => current.filter(p => p.id !== id)) 

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }
  

  if(errors) return <h1>{errors}</h1>



  return (
    <>
      <h1>Hello</h1>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home  books={books} reviews={reviews}/>}/>

          <Route path='/login' element={<Login />}/>

          <Route path='/users/signup' element={ <SignUp />}/>

          <Route path='/books/:id' element={<BookDetail books={books} reviews={reviews} />}/>
        
       
        </Routes>
    </>
  );
}

export default App;
