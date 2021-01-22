import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="container top">
        <div className="container-fluid">
          <a className="navText" href="#">
            Top
          </a>
        </div>
      </nav>
    );
  }
}
export default Navbar;
