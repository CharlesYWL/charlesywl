import React, { Component } from "react";
import { Button, Tooltip } from "@material-ui/core";
import resume from "../src/Weili-Yin-Resume.pdf";
import GetAppIcon from "@material-ui/icons/GetApp";

import "./index.sass";

function Navbar() {
  return (
    <div className="nav-bar">
      <Button className="nav-bar-part">Home</Button>
      <Button className="nav-bar-part">About</Button>
      <Button className="nav-bar-part">Works</Button>
      <a href={resume} download>
        <Button className="nav-bar-part" endIcon={<GetAppIcon />}>
          Resume
        </Button>
      </a>
    </div>
  );
}

export default Navbar;
