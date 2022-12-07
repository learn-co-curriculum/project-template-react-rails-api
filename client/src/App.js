// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/Signup'
import Login from './components/Login'
import BookDetail from './components/BookDetails'
import UserPage from './components/UserPage'


function App() {
  const [books, setBooks] = useState([])
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState([]);

  //Fetch Books
  // useEffect(() => {
  //   fetch('authorized_user')
  //   .then(res => {
  //     if(res.ok){
  //       res.json()
  //       .then(user => {
  //         setCurrentUser(user)
  //         fetchBooks()
  //       })
  //     }
  //   })
  // },[])

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
  const updateUser = (user) => setCurrentUser(user)

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }
  

  if(errors) return <h1>{errors}</h1>



  return (
    <>
      <h1></h1>
        <NavBar updateUser={updateUser}/>
        {!currentUser ? <Login error={'please login'} updateUser={updateUser}/> :
        <Routes>
          <Route exact path='/' element={<Home  books={books} reviews={reviews}/>}/>

          <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>

          <Route path='/users/signup' element={ <SignUp />}/>

          <Route path='/books/:id' element={<BookDetail books={books} reviews={reviews} />}/>
        
          <Route path='/users/:id' element={<UserPage updateUser={updateUser}/>}/>
       
        </Routes>
       } 
    </>
  );
}

export default App;
