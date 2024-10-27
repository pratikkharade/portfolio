import React, { Component } from "react";
import "./WhatIDo.css";
import { whatIDo } from "../../portfolio";
import { Fade } from "react-reveal";
import SkillIcons from "../../components/skillIcons/SkillIcons";

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
