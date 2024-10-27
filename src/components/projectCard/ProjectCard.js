import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard(props) {
  const { repo, theme } = props;

  return (
    <div className="project-card-div" style={{
      background: theme.body,
      boxShadow: `4px 3px 20px -2px ${theme.headerColor}`
    }}>
      <div className="project-name-div">
        <p className="project-name" style={{ color: theme.text }}>
          <i className="project-name-icon fa-solid fa-rocket"></i>
          {repo?.name}
        </p>
      </div>
      <div className="project-dates">
        <p
          className="project-date-para"
          style={{ color: theme.secondaryText }}
        >
          {repo?.startDate} - {repo?.endDate}
        </p>
      </div>
      <div className="project-description" style={{ color: theme.text }}>
        {repo?.brief_desc}
      </div>
      <div className="project-urls">
        {repo?.report_url && (
          <a
            href={repo.report_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecorationColor: theme.secondaryText
            }}
          >
            <p className="btn" style={{ color: theme.secondaryText }}>
              Report
              <i className="fa-solid fa-up-right-from-square project-urls-new-tab-icon"></i>
            </p>
          </a>
        )}
        {repo?.poster_url && (
          <a
            href={repo.poster_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecorationColor: theme.secondaryText
            }}
          >
            <p className="btn" style={{ color: theme.secondaryText }}>
              Poster
              <i className="fa-solid fa-up-right-from-square project-urls-new-tab-icon"></i>
            </p>
          </a>
        )}
        {repo?.github_url && (
          <a
            href={repo.github_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecorationColor: theme.secondaryText
            }}
          >
            <p className="btn" style={{ color: theme.secondaryText }}>
              Github
              <i className="fa-solid fa-up-right-from-square project-urls-new-tab-icon"></i>
            </p>
          </a>
        )}
      </div>
    </div>
  );
}
