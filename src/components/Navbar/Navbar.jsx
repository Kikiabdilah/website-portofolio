/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">MRA</a>
                </div>
                
                {/* Hamburger Icon */}
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <a href="#home" onClick={toggleMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#portofolio" onClick={toggleMenu}>Portofolio</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={toggleMenu}>Skills</a>
                        </li>
                        <li>
                            <Link to="/CV.pdf" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Resume</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar