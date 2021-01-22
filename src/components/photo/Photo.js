import React, { Component } from "react";
import "./Photo.css";

class Photo extends Component {
  render() {
    return (
      <img
        src={this.props.photo}
        className="card-img-top image"
        alt={this.props.alt}
      ></img>
    );
  }
}

export default Photo;
