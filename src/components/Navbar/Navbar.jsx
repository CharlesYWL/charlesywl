import React, { Component } from "react";
import { Button, Tooltip } from "@material-ui/core";
import resume from "../src/Weili-Yin-Resume.pdf";
import GetAppIcon from "@material-ui/icons/GetApp";

import "./index.sass";

function Navbar() {
  return (
    <div className="nav-bar">
      <Button
        className="nav-bar-part"
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Home
      </Button>
      <Button
        className="nav-bar-part"
        onClick={() => {
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        About
      </Button>
      <Button
        className="nav-bar-part"
        onClick={() => {
          document
            .getElementById("work")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Works
      </Button>
      <a href={resume} download style={{ textDecoration: "none" }}>
        <Button className="nav-bar-part" endIcon={<GetAppIcon />}>
          Resume
        </Button>
      </a>
    </div>
  );
}

export default Navbar;
