import React, { Component } from "react";
import { Button, Tooltip } from "@material-ui/core";
// import resume from "";
import GetAppIcon from "@material-ui/icons/GetApp";

import "./index.sass";

class Navbar extends Component {
  state = {
    height: window.innerHeight,
    opacity: 1,
    backgroundColor: "rgba(74,74,74,0)",
  };
  listenScrollEvent = (e) => {
    if (window.scrollY < this.state.height / 4) {
      let opc = 1 - 4 * (window.scrollY / this.state.height);
      this.setState({ opacity: opc });
    } else {
      if (window.scrollY < (this.state.height * 3) / 4) {
        this.setState({ opacity: 0 });
      } else {
        let opc = -3 + 4 * (window.scrollY / this.state.height);
        this.setState({ opacity: opc });
      }
    }
    const myWork = document.getElementById("about");
    if (myWork.getBoundingClientRect().top <= 0) {
      this.setState({
        backgroundColor: "rgba(74,74,74,1)",
      });
    } else {
      this.setState({ backgroundColor: "rgba(74,74,74,0)" });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.listenScrollEvent);
    this.setState({ height: window.innerHeight });
  };
  componentWillUnmount() {
    this.setState({ height: window.innerHeight });
  }
  render() {
    return (
      <div
        className="nav-bar"
        style={{
          opacity: this.state.opacity,
          backgroundColor: this.state.backgroundColor,
        }}
      >
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
        <a
          href="https://charlesywl.github.io/VegiExchange/charlesywl/Weili-Yin-Resume.docx"
          download="Weili-Yin-Resume"
          style={{ textDecoration: "none" }}
        >
          <Button className="nav-bar-part" endIcon={<GetAppIcon />}>
            Resume
          </Button>
        </a>
      </div>
    );
  }
}

export default Navbar;
