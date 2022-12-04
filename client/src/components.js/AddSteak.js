import React, { Component } from "react";

class AddSteak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      image: "",
      status: "",
      description: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const steak = this.state;
    this.props.AddSteak(steak);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="steak_name">Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder="Steak Name"
        />

        <label htmlFor="steak_price">Price</label>
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleOnChange}
          placeholder="Price"
        />
        <button>+ADD STEAK</button>
      </form>
    );
  }
}

export default AddSteak;
