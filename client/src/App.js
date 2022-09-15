import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import NewTraining from "./components/NewTraining/NewTraining";
import Training from "./components/Training/Training";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/new" element={<NewTraining/>}/>
          <Route path="/training" element={<Training/>}/>
        </Routes>
    </div>
  );
}

export default App;
