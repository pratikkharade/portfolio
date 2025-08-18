import React, { Component } from "react";
import "./EducationCard.css";
import { Fade, Flip } from "react-reveal";
import Button from "../../components/button/Button.js";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree?.logo_path && (
          <Flip left duration={1000}>
            <div className="education-card-img"
              style={{ boxShadow: `5px 5px 5px ${theme.headerColor}` }}>
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)"
                }}
                src={require(`../../assests/images/${degree?.logo_path}`)}
                alt={degree?.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={1000} distance="40px">
          <div
            className="education-card-body"
            style={{
              width: degree?.logo_path ? "90%" : "100%",
              boxShadow: `4px 3px 20px -2px ${theme.headerColor}`,
            }}
          >
            <div
              className="education-body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="education-body-header-title">
                <h2 className="education-card-title" style={{ color: theme.text }}>
                  {degree?.title}
                </h2>
                <h3 className="education-card-subtitle" style={{ color: theme.text }}>
                  {degree?.subtitle}
                </h3>
              </div>
              <div className="education-body-header-duration">
                <h3 className="education-duration" style={{ color: theme.text }}>
                  {degree?.duration}
                </h3>
              </div>
            </div>
            <div className="education-body-content-wrapper">
              <ul className="education-body-content">
                {degree?.descriptions?.map((sentence, index) => {
                  return (
                    <li key={index} className="education-content-list" style={{ color: theme.text }}>
                      {sentence}
                    </li>
                  );
                })}
                {degree?.courses?.length > 0 &&
                  <li className="education-content-list" style={{ color: theme.text }}>
                    Coursework:
                  </li>
                }
                <ul className="education-content-coursework-list">
                  {degree?.courses?.map((sentence, index) => {
                    return (
                      <li key={index} className="education-content-list" style={{ color: theme.text }}>
                        {sentence}
                      </li>
                    );
                  })}
                </ul>
              </ul>
              <div className="degree-card-footer">
                {degree?.cert_link && (
                  <Button
                    text={"View Diploma"}
                    className="visit-cert-btn"
                    href={degree.cert_link}
                    newTab={true}
                    theme={theme}
                  />
                )}
                {degree?.website_link && (
                  <Button
                    text={"University Website"}
                    className="visit-website-btn"
                    href={degree.website_link}
                    newTab={true}
                    theme={theme}
                  />
                )}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
