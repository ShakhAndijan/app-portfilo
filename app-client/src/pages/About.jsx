import React, {Component} from 'react';
import aboutImage from './image/project1.jpg'
import './About.css'
import Footer from "./Footer";

class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="about container">
                    <div className="col-left">
                        <div className="about-img">
                            <img src={aboutImage} alt="img"/>
                        </div>
                    </div>
                    <div className="col-right">
                        <h1 className="section-tittle">About <span>me</span></h1>
                        <h2>Full stack Developer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloribus et eum neque
                            optio quaerat qui veritatis! A accusamus adipisci consequatur dolore ducimus est nulla
                            officiis repellendus, vero voluptatum? Consequatur deserunt eius fugiat id ipsum iusto nemo,
                            nulla perferendis reiciendis!</p>
                        <a href="#" className="cta">Dawnload Resume</a>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;