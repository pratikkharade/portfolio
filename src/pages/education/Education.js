import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import { education } from "../../portfolio";
import "./Education.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={1000} distance="40px">
            <div className="education-heading-div">
              <div className="education-heading-img-div">
                {/* <EducationImg theme={theme} /> */}
                <img
                  className="education-page-poster"
                  src={require("../../assests/pages/education.webp")}
                  alt=""
                />
              </div>
              <div className="education-heading-text-div">
                <h1 className="education-heading-text" style={{ color: theme.text }}>
                  {education?.title}
                </h1>
                <p
                  className="education-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {education?.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Educations theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
