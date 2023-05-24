import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Library from './components/Library';
import Book from './components/Book';
import UploadBook from './components/UploadBook';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:bookId" element={<Book />} />
          <Route path="/books/upload" element={<UploadBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
