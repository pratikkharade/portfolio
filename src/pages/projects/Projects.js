import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import ProjectCard from "../../components/projectCard/ProjectCard.js";
import Button from "../../components/button/Button.js";
import TopButton from "../../components/topButton/TopButton.js";
import { Fade } from "react-reveal";
import { greeting, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg.js";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={1000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <ProjectsImg theme={theme} /> */}
                <img
                  className="projects-page-poster"
                  src={require("../../assests/pages/projects.webp")}
                  alt=""
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  { projects?.title }
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  { projects?.description }
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects?.data?.map((repo, index) => {
            return <ProjectCard key={index} repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting?.githubProfile}
          newTab={true}
          theme={theme}
        />

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
