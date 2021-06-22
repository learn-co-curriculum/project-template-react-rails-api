import React from "react";
import Calendar from "./components/Calendar";
import "./App.css";


class HomePage extends React.Component {
	render() {
	  return (
		<div className="App">
		
			<Calendar />
		 
		</div>
	  );
	}
  }
  
  export default HomePage;