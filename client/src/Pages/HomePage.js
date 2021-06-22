import React from "react";
import Calendar from "./components/Calendar";
import "./App.css";


class HomePage extends React.Component {
	render() {
	  return (
		<div className="App">
		  <header>
			<div id="logo">
			  <span className="icon">date_range</span>
			  <span>
				react<b>calendar</b>
			  </span>
			</div>
		  </header>
		  <main>
			<Calendar />
		  </main>
		</div>
	  );
	}
  }
  
  export default HomePage;