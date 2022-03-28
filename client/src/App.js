import './App.css';
import PreLogin from './Components/PreLogin'
import Login from './Components/Login'
import HomePage from './Components/Homepage/HomePage'
import ProfilePage from './Components/Profile/ProfilePage'
import ProjectPage from './Components/Project/ProjectPage'
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      {/* <h1>TWIDDLE WAKKA</h1> */}
      <Routes>
        <Route exact path="/" element={<PreLogin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/profilepage" element={<ProfilePage />} />
        <Route exact path="/profilepage/:username" element={<ProfilePage />} />
        <Route exact path="/projectpage/:id" element={<ProjectPage />} />
     </Routes>
    </div>
  );
}

export default App;