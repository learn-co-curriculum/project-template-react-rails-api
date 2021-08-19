
import './App.css';
import { useEffect, useState } from 'react'
import LoginPage from './Pages/LoginPage';

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

if (!user) return <LoginPage onLogin={ setUser } />
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
