import './App.css';
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SignUp from './components/Signup'
import Login from './components/Login'
import BookDetail from './components/BookDetails'
import UserPage from './components/UserPage'
import EditBookForm from './components/EditBookForm'
import BookForm from './components/BookForm'

function App() {
  const [books, setBooks] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState([]);

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

  const updateBook = (updatedBook) => setBooks(current => {
    return current.map(book => {
     if(book.id === updatedBook.id){
       return updatedBook
     } else {
       return book
     }
    })
  })
  
  const addBook = (book) => setBooks(current => [...current, book])
  const deleteBook = (id) => setBooks(current => current.filter(b => b.id !== id)) 
  const updateUser = (user) => setCurrentUser(user)
  
  if(errors) return <h1>{errors}</h1>

  return (
    <>
        <NavBar updateUser={updateUser}/>
        {!currentUser ? <Routes>
          <Route exact path='/' element={<Home  books={books} deleteBook={deleteBook}/>}/>

          <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>

          <Route path='/users/signup' element={ <SignUp/>}/>

          <Route path='/books/:id' element={<BookDetail books={books}  />}/>

          <Route  path='/books/new' element={<BookForm addBook={addBook}/>}/>

          <Route  path='/books/:id/edit' element={<EditBookForm updateBook={updateBook}/>}/>
        
          <Route path='/users/:id' element={<UserPage updateUser={updateUser}/>}/>
       
        </Routes> : <Login error={'please login'} updateUser={updateUser}/>
        
       } 
    </>
  );
}

export default App;
