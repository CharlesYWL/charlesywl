import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import "./index.sass";

class About extends Component {
  render() {
    let resumeData = this.props.resumeData.about;

    return (
      <div className="about" id="about">
        <div className="about-container">
          <div className="about-img">
            <Avatar
              className="about-img-avatar"
              alt="Weili Yin"
              src={resumeData.imgUrl}
            />
          </div>
          <div className="about-info">
            <div className="about-info-part">
              <div className="title">About Me</div>
              <div className="info">{resumeData.aboutMe}</div>
            </div>
            <div className="about-info-part">
              <div className="title">Contact Details</div>
              <div className="info">{resumeData.contactDetails.email}</div>
              <div className="info">{resumeData.contactDetails.phone}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
