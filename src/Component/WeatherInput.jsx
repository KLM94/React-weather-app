import React, { Component } from "react";

class WeatherInput extends Component {
  state = {
    searchInput: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchInput}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateCity(this.state.searchInput);
  };
}

export default WeatherInput;
