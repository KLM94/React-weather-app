import React, { Component } from "react";

class WeatherInput extends Component {
  state = {
    searchInput: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input">
          <label className="enter-city-text">
            Enter your nearest city to find out the latest weather reports
            <br></br>
          </label>
          <input
            className="city"
            type="text"
            onChange={this.handleChange}
            value={this.state.searchInput}
          ></input>

          <button className="submit" type="submit">
            Search
          </button>
        </div>
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
