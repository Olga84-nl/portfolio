import React, {Component} from 'react';
import c from './Header.module.css';



const Header = () => {
    return (
        <header className={c.header}>
            <img src='https://c7.hotpng.com/preview/827/941/168/web-development-web-design-logo-website.jpg' />
            <span>RctRdx</span>
        </header>
    )
}


export default Header;