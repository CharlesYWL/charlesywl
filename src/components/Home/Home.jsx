import React, { Component, useRef } from "react";
import "./index.sass";
import { IconButton } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import homeimg from "../img/homeimg.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
class Home extends Component {
  render() {
    let resumeData = this.props.resumeData.home;
    return (
      <div className="home" id="home">
        {homeimg ? (
          <img className="home-img" src={homeimg} />
        ) : (
          <Skeleton variant="rect" width={"100vw"} height={"100vh"} />
        )}

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
          <IconButton
            onClick={() => {
              let anchorElement = document.getElementById("about");
              anchorElement.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ExpandMoreOutlinedIcon
              className="home-next-icon"
              style={{ color: "white" }}
            />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Home;
