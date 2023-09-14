import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-left">
                <li className="nav-item">
                    <a className="logo" href="#">micromarket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
            <ul className="navbar-right">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Log in </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign up</a>
                </li>
            </ul>
        </nav>
    );
  };
export default NavBar;
  