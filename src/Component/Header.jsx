import React, { Component } from "react";
import Moment from "react-moment";

class Header extends Component {
  render() {
    const dateToFormat = new Date();
    return (
      <React.Fragment>
        <div className="header">
          <h1>Weather Forecast</h1>
          <Moment
            className="time"
            format="YYYY/MM/DD HH:mm"
            date={dateToFormat}
          ></Moment>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
