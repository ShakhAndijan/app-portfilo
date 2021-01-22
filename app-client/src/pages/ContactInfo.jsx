import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneSquareAlt, faMailBulk, faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import './ContactInfo.css'
import Footer from "./Footer";

class ContactInfo extends Component {
    render() {
        return (
            <div id="contact">
                <div className="contact container">
                    <div><h1 className="section-tittle">Contact <span>Info</span></h1></div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhoneSquareAlt} className="icons"/>
                            </div>
                            <div className="contact-info">
                                <h1>Phone</h1>
                                <h2>+998945620903</h2>
                                <h2>+998335620903</h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMailBulk} className="icons" />
                            </div>
                            <div className="contact-info">
                                <h1>Email</h1>
                                <h2>ShakhAndijan@gmail.com</h2>
                                <h2>t.me:@shakh_pdp1</h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faLocationArrow} className="icons"/>
                            </div>
                            <div className="contact-info">
                                <h1>Address</h1>
                                <h2>Andijan viloyati Balikchi tuman.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ContactInfo;