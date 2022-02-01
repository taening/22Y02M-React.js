import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <i className="fas fa-leaf"></i>
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-habits-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
