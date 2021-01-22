import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ContactInfo from "./pages/ContactInfo";
import About from "./pages/About";


function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/services' component={Service}/>
                    <Route path='/contactInfo' component={ContactInfo}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
