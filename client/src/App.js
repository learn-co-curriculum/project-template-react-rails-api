// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { BrowserRouter as Route, Routes, Router } from 'react-router-dom'
import Home from './components/Home'


function App() {
  const [books, setBooks] = useState([])
  const [errors, setErrors] = useState(false)


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

  if(errors) return <h1>{errors}</h1>



  return (
    <>
      <h1>Hello</h1>
      <Router>
        {/* <NavBar /> */}
        <Routes>

          <Route exact path='/'>
            <Home  books={books}/>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
