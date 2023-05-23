import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Library from './components/Library';
import Book from './components/Book';  // make sure you've exported Book component in Book.js
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:bookId" element={<Book />} /> {/* bookId is a placeholder for the unique id of each book */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
