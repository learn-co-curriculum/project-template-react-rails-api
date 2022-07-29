import Header from "./everyone/Header"
import InformationContainer from "./InformationContainer";
import "../App.css";
import { useState, useEffect} from "react"

function App() {

const [recCenters, setRecCenters] = useState([])

useEffect(() => {
  fetch(`http://localhost:3000/rec_centers`)
      .then(res => res.json())
      .then((data) => setRecCenters(data))
    }, [])

  return (
    <div className="App">
      <Header />
      <InformationContainer recCenters={recCenters}/>
    </div>
  );
}

export default App;
