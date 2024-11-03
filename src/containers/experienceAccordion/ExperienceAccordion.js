import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const {theme, experiences} = this.props;
    return (
      <div className="experience-accord">
        <div className="experience-accord-panel">
          <div style={{ backgroundColor: theme.body }}>
            {experiences.map((experience, index) => {
              return (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={experiences?.length}
                  experience={experience}
                  theme={theme}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;
