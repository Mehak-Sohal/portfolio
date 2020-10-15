import React from 'react'
import './stylesheet.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = () => {
    return (
        <section id='home'>
            <div className='header'>
                <div className='header-body'>
                <img className='header-image' src='/images/cover.jpg' alt='' />
                <div className='header-text'>
                    <h1>I'm Mehakpreet Kaur</h1>
                    <h6>I am a Front End Web Developer specialized in javaScript and Reactjs</h6>
                
                    <div className='social-links'>
                        <a href='https://www.linkedin.com/in/mehakpreetkaur1994' target='_blank' rel="noopener noreferrer"><LinkedInIcon /></a>
                        <a href='https://www.instagram.com/mehaksohal94' target='_blank' rel="noopener noreferrer"><InstagramIcon /></a>
                        <a href='https://github.com/Mehak-Sohal' target='_blank' rel="noopener noreferrer"><GitHubIcon /></a>
                    </div>
                </div>
                </div>
            </div>  
        </section>
    )
}

export default Header
