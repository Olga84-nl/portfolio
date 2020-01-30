import React, { Component } from 'react';
import classes from './Nav.module.css';



const Nav = () => {
    console.log(classes)
    return (
        <nav className="nav">
            <div className = "item"><a>Profile</a></div>
            <div className = "item"><a>Messages</a></div>
            <div className = "item"><a>News</a></div>
            <div className = "item"><a>Music</a></div>
            <div className = "item"><a>Photo</a></div>
        </nav>
    )
}

export default Nav;