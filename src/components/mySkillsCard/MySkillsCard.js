import React from "react";
import "./MySkillsCard.css";
import { Fade } from "react-reveal";

export default function MySkillsCard(props) {
    const { iconClass, skill, theme } = props;
    const iconClassName = "skill-category-icon " + skill?.iconClass;
    return (
        <div className="skill-card-div" style={{
                backgroundColor: theme.highlight,
                boxShadow: `4px 3px 20px -2px ${theme.headerColor}`
            }}>
            <Fade bottom duration={2000} distance="40px">
                <div className="skill-category-div">
                    <p className="skill-category" style={{ color: theme.text }}>
                        <i className={iconClassName}></i>
                        {skill?.category}
                    </p>
                </div>
                <p className="skill-description" style={{ color: theme.secondaryText }}>
                    {skill?.description}
                </p>
                <div className="skill-details">
                    <ul>
                        {skill?.skills?.map((skill, index) => (
                            <li key={index} style={{ color: theme.text }}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </Fade>
        </div>
    );
}
