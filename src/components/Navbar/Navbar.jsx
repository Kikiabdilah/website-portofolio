/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                    <div className="logo">
                        <a href="/">MRA</a>
                    </div>
                    <div className='navbar'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link></li>
                            <li>
                                <a href="#portofolio">Portofolio</a></li>
                            <li>
                                <Link to="Skills">Skills</Link>
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