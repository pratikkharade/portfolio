import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import TopButton from "../../components/topButton/TopButton.js";
import { Fade } from "react-reveal";
import { contact } from "../../portfolio.js";
import "./Contact.css";
import ContactImg from "./ContactImg.js";
import ContactCard from "../../components/contactCard/ContactCard.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";

class Contact extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="contact-main">
                <Header theme={theme} />
                <div className="basic-contact">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="contact-heading-div">
                            <div className="contact-heading-img-div">
                                <ContactImg theme={theme} />
                            </div>
                            <div className="contact-heading-text-div">
                                <h1
                                    className="contact-heading-text"
                                    style={{ color: theme.text }}
                                >
                                    {contact?.title}
                                </h1>
                                <div
                                    className="contact-header-detail-text subTitle"
                                    style={{ color: theme.secondaryText }}
                                >
                                    {contact?.description}
                                    <div className="contact-social-media">
                                        <SocialMedia theme={theme} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="contact-cards-div-main">
                    {contact?.address && <ContactCard theme={theme} title="Address" text={contact?.address} iconClass="fa-location-dot" />}
                    {contact?.email && <ContactCard theme={theme} title="Email" text={contact?.email} iconClass="fa-envelope" />}
                    {contact?.phone && <ContactCard theme={theme} title="Phone" text={contact?.phone} iconClass="fa-phone" />}
                </div>
                <TopButton theme={this.props.theme} />
            </div>
        );
    }
}

export default Contact;
