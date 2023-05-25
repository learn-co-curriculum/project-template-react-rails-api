import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Library from './components/Library';
import Book from './components/Book';
import UploadBook from './components/UploadBook';
import './App.css';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:bookId" element={<Book />} />
          <Route path="/books/upload" element={<UploadBook />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
