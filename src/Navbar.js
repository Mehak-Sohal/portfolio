import React from 'react'
import './stylesheet.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='navbar'>
           <div className='navbar-links'>
                <Link to="home" className='navbar-link' smooth={true} duration={1000}>HOME</Link>
                <Link to="about" className='navbar-link' smooth={true} duration={1000}>ABOUT</Link>
                <Link to="resume" className='navbar-link' smooth={true} duration={1000}>RESUME</Link>
                <Link to="projects" className='navbar-link' smooth={true} duration={2000}>PROJECTS</Link>
            </div> 
        </div>
    )
}

export default Navbar
