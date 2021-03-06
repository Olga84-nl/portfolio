import React, { Component } from 'react';
import c from './Nav.module.css';


const Nav = () => {
    return (
        <nav className={c.nav}>
            <div className='{${c.item} ${c.active}}'><a>Profile</a></div>
            <div className={c.item}><a>Messages</a></div>
            <div className={c.item}><a>News</a></div>
            <div className={c.item}><a>Music</a></div>
            <div className={c.item}><a>Photo</a></div>
        </nav>
    )
}

export default Nav;