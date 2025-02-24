import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/educationCard/EducationCard.js";
import { education } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-div-main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={1000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {education?.degrees.map((degree, index) => {
            return <DegreeCard key={index} degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
