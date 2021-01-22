import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faWhatsapp, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

library.add();

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer container">
                    <div className="brand">
                        <h1 className="section-tittle"><span>Sh</span>a<span>k</span>h</h1>
                    </div>
                    <h2>Your Complete Web Solution</h2>
                    <div className="social-icon">
                        <div className="social-item">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} className="icons"/></a>
                        </div>
                        <div className="social-item">
                            <a href="#"><FontAwesomeIcon icon={faInstagram} className="icons"/></a>
                        </div>
                        <div className="social-item">
                            <a href="#"><FontAwesomeIcon icon={faWhatsapp} className="icons"/></a>
                        </div>
                        <div className="social-item">
                            <a href="#"><FontAwesomeIcon icon={faTelegramPlane} className="icons"/></a>
                        </div>
                    </div>
                    <p>Copyright @ 2020 Shakhzodbek All right recerved</p>
                </div>
            </div>
        );
    }
}

export default Footer;