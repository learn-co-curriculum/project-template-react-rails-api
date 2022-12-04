import React from "react";
import Order from "./Order";
import Header from "./Header";
import AdminMenu from "./AdminMenu";
import Steaks from "./Steaks";
import AddSteak from "./AddSteak";
import steakAction from "../actions/steakAction";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      steaks: [],
      orders: {},
    };
  }

  componentDidMount() {
    steakAction.fetchSteaks().then((steaks) => this.setState({ steaks }));
  }

  addMovie = (steak) => {
    steakAction.createSteak(steak).then((steak) =>
      this.setState({
        steaks: this.state.steaks.concat(steak),
      })
    );
  };

  render() {
    return (
      <div className="steak-paradise">
        <div className="menu">
          <Header title="Nyama Haven Steaks" />
        </div>

        <Order />
        <AdminMenu />
        <div>
          <Steaks steaks={this.state.steaks} />
        </div>

        <div>
          <AddSteak addSteak={this.addSteak} />
        </div>
      </div>
    );
  }
}

export default App;
