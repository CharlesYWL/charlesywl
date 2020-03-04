import React, { Component } from "react";
import "./index.sass";
import { IconButton, Link, Icon } from "@material-ui/core";
import homeimg from "../img/homeimg.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
class Home extends Component {
  render() {
    let resumeData = this.props.resumeData.home;
    return (
      <div className="home">
        <img className="home-img" src={homeimg} />
        <div className="home-mid">
          <div className="home-title">{resumeData.bigTitle}</div>
          <div className="home-sub">{resumeData.discribtion}</div>
          <div className="home-linkgroup">
            <a
              href={resumeData.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="home-linkgroup-button">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </a>
            <a
              href={resumeData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="home-linkgroup-button">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </a>
          </div>
        </div>
        <div className="home-next">
          <IconButton>
            <ExpandMoreOutlinedIcon
              style={{ color: "white", fontSize: "2em" }}
            />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Home;
