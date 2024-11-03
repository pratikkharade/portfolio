import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
// import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={1000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <ExperienceImg theme={theme} /> */}
                <img
                  className="experience-page-poster"
                  src={require("../../assests/pages/experience.webp")}
                  alt=""
                />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  { experience?.title }
                </h1>
                <p
                  className="experience-header-detail-text"
                  style={{ color: theme.secondaryText }}
                >
                  { experience?.description }
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion experiences={experience?.experiences} theme={theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
