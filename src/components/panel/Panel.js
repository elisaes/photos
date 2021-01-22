import React, { Component } from "react";
import Description from "../description/Description";
import Photo from "../photo/Photo";
import "./Panel.css"

class Panel extends Component {
  render() {
      
    return (
      <div className="panelContainer">
        <div className="row row-cols-1 g-1">
          {this.props.photosArr.map((content, i) => (
            <div className="col" key={`p${i}`}>
              <div className="card post">
                <Photo  photo={content.urls.raw+"&w=800&dpr=2"} alt={content.alt_description}/>
                <div className="card-title title">
                  {content.alt_description}
                </div>
                <Description description={content.user.bio}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Panel;
