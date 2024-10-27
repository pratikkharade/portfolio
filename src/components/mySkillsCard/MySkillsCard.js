import React from "react";
import "./MySkillsCard.css";
import { Fade } from "react-reveal";
import SkillIcons from "../skillIcons/SkillIcons";

export default function MySkillsCard(props) {
    const { skill, theme } = props;
    const iconClassName = "skill-category-icon " + skill?.iconClass;
    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="skill-card-div" style={{
                backgroundColor: theme.highlight,
                boxShadow: `4px 3px 20px -2px ${theme.headerColor}`
            }}>

                <div className="skill-card-header"
                    style={{ background: `${theme.headerColor}` }}
                >
                    <div className="skill-category-div">
                        <p className="skill-category" style={{ color: theme.text }}>
                            <i className={iconClassName}></i>
                            {skill?.category}
                        </p>
                    </div>
                    {/* <p className="skill-description" style={{ color: theme.secondaryText }}>
                        {skill?.description}
                    </p> */}
                </div>
                <div className="skill-card-body">
                    <div className="skill-details">
                        <ul>
                            {skill?.skills?.map((skill, index) => (
                                <li key={index} style={{ color: theme.text }}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="myskill-skill-icons">
                        {skill?.techStack && <SkillIcons icons={skill.techStack} />}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
