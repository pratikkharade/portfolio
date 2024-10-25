import React from "react";
import "./ContactCard.css";
import { Fade } from "react-reveal";

export default function ContactCard(props) {
    const { iconClass, title, text, theme } = props;
    const iconClassName = "contact-card-icon fa-solid " + iconClass;
    return (
        <div className="contact-card-div" style={{
            backgroundColor: theme.highlight,
            boxShadow: `4px 3px 20px -2px ${theme.headerColor}`
        }}>
            <Fade bottom duration={2000} distance="40px">
                <div className="contact-category-div">
                    <p className="contact-category" style={{ color: theme.text }}>
                        <i className={iconClassName}></i>
                        {title}
                    </p>
                </div>
                <div className="contact-details">
                    {text}
                </div>
            </Fade>
        </div>
    );
}


