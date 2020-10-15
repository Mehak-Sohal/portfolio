import React from 'react'
import './stylesheet.css'

const About = () => {
    return (
        <section id='about'>
        <div className='about'>
            <div className='about-left'>
                <div className='about-text'>
                <h2>About Me</h2>
                <p>I'm focused mainly on ReactJs web applications. I have 3+ years experience of developing, defining and managing the software / product development strategy. I have proven leadership and project management skills within multiple large and complex projects. </p>

                <h2>Contact Details</h2>
                <p>Toronto, Ontario</p>
                <p>M1E 4V9</p>
                <br />
                <p>+1226-961-4471</p>
                <p>mehak.sohal94@gmail.com</p>

                </div>
            </div>

            <div className='about-right'>
                <img className='profile-image' src='/images/mehak.jpg' alt='' />
            </div>

            </div>
        </section>
    )
}

export default About
