import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import './Service.css'
import Footer from "./Footer";

function Service() {
        return (
            <div>
                <div id="services">
                    <div className="services container">
                        <div className="service-top">
                            <h1 className="section-tittle">
                                Serv<span>i</span>ces
                            </h1>
                            <p><i> <b>Full Stack Developer</b></i> kuchli intilish, kuchli xoxish. Ideal g'oyalar bilan
                                ishlash tajribasi</p>
                        </div>
                        <div className="service-bottom">
                            <div className="service-item">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCommentAlt} className="icon-right"/>
                                </div>
                                <h2>Frontend Developer</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, itaque, sed.
                                    Autem dicta itaque repudiandae.</p>
                            </div>
                            <div className="service-item">
                                <div className="icon">
                                    <FontAwesomeIcon className="icon-right" icon={faCommentAlt}/>
                                </div>
                                <h2>Backend Developer</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem explicabo
                                    modi quis totam voluptates.</p>
                            </div>
                            <div className="service-item">
                                <div className="icon">
                                    <FontAwesomeIcon className="icon-right" icon={faCommentAlt}/>
                                </div>
                                <h2>DataBase</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis ipsam maiores
                                    minus nisi? Soluta!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );

}

export default Service;