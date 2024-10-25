import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard(props) {
  const { repo, theme } = props;
  
  return (
    <div className="repo-card-div" style={{
        backgroundColor: theme.highlight,
        boxShadow: `4px 3px 20px -2px ${theme.headerColor}`
      }}>
      <Fade bottom duration={2000} distance="40px">
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo?.name}
          </p>
        </div>
        <div className="repo-dates">
          <p
            className="repo-date-para subTitle"
            style={{ color: theme.secondaryText }}
          >
            {repo?.startDate} - {repo?.endDate}
          </p>
        </div>
        <div className="repo-description" style={{ color: theme.text }}>
          {repo?.brief_desc}
        </div>
        <div className="repo-urls">
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
                <i className="fa-solid fa-up-right-from-square repo-urls-new-tab-icon"></i>
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
                <i className="fa-solid fa-up-right-from-square repo-urls-new-tab-icon"></i>
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
                <i className="fa-solid fa-up-right-from-square repo-urls-new-tab-icon"></i>
              </p>
            </a>
          )}
        </div>
      </Fade>
    </div>
  );
}
