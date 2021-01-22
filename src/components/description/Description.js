import React, { Component } from "react";
import "./Description.css"
class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="about">About the author:</div>
        {this.props.description ? (
          <p className="card-text author">{this.props.description}</p>
        ) : (
          <p className="card-text author">Hey there, I like this picture</p>
        )}
      </div>
    );
  }
}

export default Description;
