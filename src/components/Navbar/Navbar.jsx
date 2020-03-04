import React, { Component } from "react";
import { Button, AppBar } from "@material-ui/core";
import "./index.sass";

function Navbar() {
  return (
    <div className="nav-bar">
      <Button className="nav-bar-part">Home</Button>
      <Button className="nav-bar-part">About</Button>
      <Button className="nav-bar-part">Works</Button>
      <Button className="nav-bar-part">Resuem</Button>
    </div>
  );
}

export default Navbar;
