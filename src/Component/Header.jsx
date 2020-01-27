import React, { Component } from "react";
import Moment from "react-moment";

class Header extends Component {
  render() {
    const dateToFormat = new Date();
    return (
      <React.Fragment>
        <h1>Weather Forecast</h1>
        <Moment format="YYYY/MM/DD HH:mm" date={dateToFormat}></Moment>
      </React.Fragment>
    );
  }
}

export default Header;
