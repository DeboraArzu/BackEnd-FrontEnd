import React from 'react';
import './Navbar.css';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar-navigation">
            <div>
                <DrawerToggleButton/>
            </div>
            <div className="navbar-logo">
                <a href="/">LOGO</a> 
            </div>
            <div className="space"/>
            <div className="navbar-navigation-items">
                <ul>
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;