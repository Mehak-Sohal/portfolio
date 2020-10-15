import React from 'react'
import './stylesheet.css'

const Resume = () => {
    return (
        <section id='resume'>
        <div className='resume'>
            <div className='resume-section'>
                <div className='resume-title'>
                    <h4>EDUCATION</h4>
                </div>
                <div className='resume-info'>
                <p className='resume-infoLineOne'>University of Windsor</p>
                <p className='resume-infoLineTwo'>
                    Masters in Electrical and Computer Engineering
                    <span className='time-span'>(2018-2019)</span>
                </p>
                <p className='resume-infoLineThree'>Graduated with A grade</p>

                <p className='resume-infoLineOne'>Guru Nanak Dev University</p>
                <p className='resume-infoLineTwo'>
                    Bachelors in Technology - Electronics and Communication System Engineering
                    <span className='time-span'>(2013-2017)</span>
                </p>
                <p className='resume-infoLineThree'>Graduated with A grade</p>

                </div>

            </div>

            <div className='resume-section section2'>
                <div className='resume-title'>
                    <h4>WORK EXPERIENCE</h4>
                </div>
                <div className='resume-info'>

                <p className='resume-infoLineOne'>Frontend Web Developer</p>
                <p className='resume-infoLineTwo'>
                Freelancing
                    <span className='time-span'>(Sep2019- May2020)</span>
                </p>
                <p className='resume-infoLineThree'>Worked on wide variety of projects including UI/UX designs and layouts, designing web applications from scratch and debugging using latest technology, thus refining development skill<br />
                Developed websites and landing pages for small businesses such as restaurants, interior designers, fashion designers and Gymnasiums.</p>
                 
                <p className='resume-infoLineOne'>Junior Engineer</p>
                <p className='resume-infoLineTwo'>
                Smartcool Systems Pvt Ltd
                    <span className='time-span'>(Dec2016- Nov2017)</span>
                </p>
                <p className='resume-infoLineThree'>Identified, documented and reported bugs, errors, interoperability flaws and other issues within proprietary software applications
                <br />Perform system, unit, acceptance, regression, load and functional/performance testing on dozens of applications using both automated and manual testing methods</p>

                <p className='resume-infoLineOne'>Intern-Networking(CCNA)</p>
                <p className='resume-infoLineTwo'>
                NIIT, India
                    <span className='time-span'>(Dec2016- Nov2017)</span>
                </p>
                <p className='resume-infoLineThree'>Ability to install, configure, operate and troubleshoot medium-size route and switched networks, including implementation and verification of connections to remote sites in a WAN.</p>

                

                </div>
            </div>

            <div className='resume-section'>
                <div className='resume-title'>
                    <h4>SKILLS</h4>
                </div>
                <div className='resume-info'>
                    <div className='resume-skillsSet'>
                    <div className='resume-skillBox'>
                        <h4>ReactJs</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4> Javascript</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>Redux</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>Context API</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>Firebase</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>MongoDb</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>NodeJs</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>HTML5</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>CSS3</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>Git</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>Github</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>Postman</h4>
                    </div>
                    <div className='resume-skillBox'>
                        <h4>Adobe Creative Suite</h4>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
    )
}

export default Resume