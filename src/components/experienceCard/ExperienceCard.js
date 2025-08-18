import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div className="experience-list-item">
        <Fade left duration={1000} distance="40px">
          <div className="experience-card-logo-div">
            <div className="experience-card-img"
              style={{ boxShadow: `5px 5px 5px ${theme.headerColor}` }}>
              <img
                className={`experience-card-logo ${experience.logo_class}`}
                src={require(`../../assests/images/${experience["logo_path"]}`)}
                alt=""
              />
            </div>
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          <div
            style={{
              height: "calc(100% - 70px)",
              width: 2,
              backgroundColor: `${theme.headerColor}`,
              position: "absolute",
              marginTop: 20,
            }}
          />
        </div>
        <Fade right duration={1000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{
                background: `${theme.body}`,
                boxShadow: `4px 3px 20px -2px ${theme.headerColor}`
              }}
            >
              <div className="experience-card-header" >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience?.title}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience?.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.text }}
                    >
                      {experience?.company}
                      <i
                        style={{ color: theme.secondaryText }}
                        className="fa-solid fa-up-right-from-square expo-compary-url-icon"></i>
                    </a>

                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience?.duration}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience?.location}
                    </p>
                  </div>
                </div>
              </div>
              {experience?.description && (
                <ul className="experience-body-content">
                  {experience?.description?.map((sentence, index) => (
                    <li key={index} className="experience-content-list" style={{ color: theme.text }}>
                      {sentence}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
