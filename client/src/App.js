import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Login />} />
                  {/* other routes here */}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
