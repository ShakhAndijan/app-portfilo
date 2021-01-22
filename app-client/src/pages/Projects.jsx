import React, {Component} from 'react';
import ProjectBack from "./image/project.jpg";
import './Projects.css'
import Footer from "./Footer";

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <div className="projects container">
                    <div className="projects-header">
                        <h1 className="section-tittle">Recent <span>Projects</span></h1>
                    </div>
                    <div className="all-projects">
                        <div className="project-item">
                            <div className="project-info">
                                <h1>App Crud</h1>
                                <h2>Practicenp</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
                                    blanditiis exercitationem expedita ipsa, laborum numquam praesentium quis quo
                                    suscipit? Consequatur doloribus et laborum molestiae obcaecati rerum sit vel
                                    vero.</p>
                            </div>
                            <div className="project-img">
                                <img src={ProjectBack} alt="img"/>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 2</h1>
                                <h2>Coding is Love</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
                                    blanditiis exercitationem expedita ipsa, laborum numquam praesentium quis quo
                                    suscipit? Consequatur doloribus et laborum molestiae obcaecati rerum sit vel
                                    vero.</p>
                            </div>
                            <div className="project-img">
                                <img src={ProjectBack} alt="img"/>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 3</h1>
                                <h2>Coding is Love</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
                                    blanditiis exercitationem expedita ipsa, laborum numquam praesentium quis quo
                                    suscipit? Consequatur doloribus et laborum molestiae obcaecati rerum sit vel
                                    vero.</p>
                            </div>
                            <div className="project-img">
                                <img src={ProjectBack} alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Projects;