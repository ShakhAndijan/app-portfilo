import React from 'react'
import './Home.css'
import Projects from "./Projects";
import Service from "./Service";
import ContactInfo from "./ContactInfo";
import About from "./About";
import Footer from "./Footer";


function Home() {
    return (
        <>
            <div id="hero">
                <div className="hero container">
                    <div>
                        <h1>Hello, <span></span></h1>
                        <h1>My Name is <span></span></h1>
                        <h1>Shakhzodbek <span></span></h1>
                        <a href="#" type="button" className="cta">Portfolio</a>
                    </div>

                </div>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <Service/>
            </div>
            <div>
                <ContactInfo/>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;