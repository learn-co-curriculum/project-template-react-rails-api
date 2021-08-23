import "../App.css";
import Header from "./Header";
import { useEffect, useState } from "react";


function App() {
    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/dishes")
          .then((resp) => resp.json())
          .then((data) => setDishes(data));
      }, []);
      
      return (
          <div className="App">
              <Header />
              <CardContainer 
              dishes={dishes}
              setDishes={setDishes}
              search={search}
              setSearch={setSearch}
              />
          </div>
      )
}

export default App;