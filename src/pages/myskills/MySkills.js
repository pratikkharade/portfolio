import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import TopButton from "../../components/topButton/TopButton.js";
import MySkillsCard from "../../components/mySkillsCard/MySkillsCard.js";
import { Fade } from "react-reveal";
import { mySkills } from "../../portfolio.js";
import "./MySkills.css";
import MySkillsImg from "./MySkillsImg.js";

class MySkills extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="myskills-main">
        <Header theme={theme} />
        <div className="basic-myskills">
          <Fade bottom duration={2000} distance="40px">
            <div className="myskills-heading-div">
              <div className="myskills-heading-img-div">
                <MySkillsImg theme={theme} />
              </div>
              <div className="myskills-heading-text-div">
                <h1
                  className="myskills-heading-text"
                  style={{ color: theme.text }}
                >
                  { mySkills?.title }
                </h1>
                <p
                  className="myskills-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  { mySkills?.description }
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="skills-cards-div-main">
          {mySkills?.data?.map((skill, index) => {
            return <MySkillsCard key={index} skill={skill} theme={theme} />;
          })}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default MySkills;
