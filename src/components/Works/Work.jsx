import React, { Component } from "react";
import "./index.sass";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
class Work extends Component {
  render() {
    let resumeData = this.props.resumeData.works;
    return (
      <div className="work-wrapper" id="work">
        <div className="work-title">MY WORKS</div>
        <div className="work">
          {resumeData.map((value, index) => {
            return (
              <Card className="work-card">
                <a
                  href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <CardActionArea className="work-card-container">
                    <img className="img" src={value.imgid} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className="title"
                      >
                        {value.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="title"
                      >
                        {value.info}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="skill-title"
                      >
                        {value.tech}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Work;
