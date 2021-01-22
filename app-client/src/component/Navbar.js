import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import './Navbar.css'
import {IconContext} from 'react-icons'
import Home from "../pages/Home";

function Navbar() {
    return (
        <div className="navbar">
                <div className="brand">
                    <a href="#"><h1 className="section-tittle"><span>Sh</span>a<span>k</span>h</h1></a>
                </div>
                <nav>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar