import React, { Component } from "react";
import "./index.sass";
import ACLogo from "../img/AccessSecureLogo.png";
import HMLogo from "../img/HalfMileLogo.png";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";
class Work extends Component {
  render() {
    let resumeData = this.props.resumeData.works;
    return (
      <div className="work-wrapper" id="work">
        <div className="work-title">MY WORKS</div>
        <div className="work">
          <Card className="work-card">
            <a
              href={resumeData[0].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardActionArea className="work-card-container">
                <img className="img" src={ACLogo} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="title"
                  >
                    Access Secure
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="title"
                  >
                    Middleware and service for access control, logging,
                    anti-spamming, black/white list, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>
          <Card className="work-card">
            <a
              href={resumeData[1].link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardActionArea className="work-card-container">
                <img className="img" src={HMLogo} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="title"
                  >
                    Half Mile(Demo)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="title"
                  >
                    An All-In-One travel planner including route planning,
                    hotel/flight reservation and auto-generated checklist
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>
        </div>
      </div>
    );
  }
}

export default Work;
