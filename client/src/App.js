
import './App.css';
import { useEffect, useState } from 'react'
import LoginPage from './Pages/LoginPage';
import UserHomePage from './Pages/UserHomePage';
import Navbar from './Components/NavBar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

if (!user) return <LoginPage onLogin={setUser} />
  
  return (
    <div className="App">
      <Navbar />
      <UserHomePage />
    </div>
  );
}

export default App;
