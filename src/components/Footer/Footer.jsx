import React, { Component } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./index.sass";
import { Avatar, IconButton } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-backtotop">
          <IconButton
            onClick={() => {
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Avatar style={{ height: 50, width: 50 }}>
              <ExpandLessIcon style={{ fontSize: 50 }} />
            </Avatar>
          </IconButton>
        </div>
        <div className="footer-version">Version 0.0.3</div>
      </div>
    );
  }
}

export default Footer;
