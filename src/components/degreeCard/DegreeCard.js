import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree?.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img" 
                style={{
                  borderColor: `${theme.headerColor}`,
                  boxShadow: `5px 5px 5px ${theme.headerColor}`
                }}>
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
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{
              width: degree?.logo_path ? "90%" : "100%",
              borderColor: `${theme.headerColor}`,
              boxShadow: `4px 3px 20px -2px ${theme.headerColor}`,
            }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree?.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree?.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree?.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree?.descriptions?.map((sentence, index) => {
                return (
                  <li key={index} className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </li>
                );
              })}
              {degree?.courses?.length > 0 &&
                <li className="content-list" style={{ color: theme.text }}>
                  Coursework:
                </li>
              }
              <ul className="content-list-ul">

                {degree?.courses?.map((sentence, index) => {
                  return (
                    <li key={index} className="content-list" style={{ color: theme.text }}>
                      {sentence}
                    </li>
                  );
                })}
              </ul>
              <div className="degree-card-links">
                {degree?.cert_link && (
                  <a
                    href={degree.cert_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="visit-cert-btn"
                      style={{ backgroundColor: theme.headerColor }}
                    >
                      <p className="btn" style={{ color: theme.text }}>
                        View Diploma
                      </p>
                    </div>
                  </a>
                )}
                {degree?.website_link && (
                  <a
                    href={degree.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="visit-website-btn"
                      style={{ backgroundColor: theme.headerColor }}
                    >
                      <p className="btn" style={{ color: theme.text }}>
                        University Website
                      </p>
                    </div>
                  </a>
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
