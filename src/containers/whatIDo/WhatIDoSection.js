import React, { Component } from "react";
import "./WhatIDo.css";
import { whatIDo } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import SkillIcons from "../../components/skillIcons/SkillIcons";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class WhatIDoSection extends Component {
  render() {
    const theme = this.props.theme;
    
    return (
      <div>
        {whatIDo?.map((skill, i) => {
          return (
            <div key={i} className="whatIDo-main-div" style={{
              boxShadow: `${theme.secondaryText} 0 0 20px -8px`
            }}>
              <Fade left duration={1000}>
                <div className="whatIDo-image-div">
                  <img
                    className="whatIDo-image"
                    src={require(`../../assests/whatIDo/${skill?.img}`)}
                    alt=""
                  />
                </div>
              </Fade>

              <div className="whatIDo-text-div">
                <Fade right duration={1000}>
                  <h1 className="whatIDo-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                  <div className="whatIdo-tech-stack-logos">
                    {skill.techStack && <SkillIcons icons={skill.techStack} />}
                  </div>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle whatIDo-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WhatIDoSection;
