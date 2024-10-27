import React from 'react';
import "./SkillIcons.css";

function SkillIcons(props) {
    const icons = props.icons;
    return (
        <div className='skill-icons-wrapper'>
            {icons?.map((icon, i) => (
                <img
                    key={i}
                    title={icon?.name}
                    className="skill-icon"
                    src={require(`../../assests/skills/${icon?.iconClass}`)}
                    alt=""
                />
            ))}
        </div>
    );
}

export default SkillIcons;