import React from 'react'
import './stylesheet.css'

const Projects = () => {
    return (
        <section id='projects'>
            <h2> Here are some of my projects</h2>
            <div className='projects'>
            <div className='project'>
                <div className='project-image'>
                    <a href='https://myrestaurant-d873f.web.app/' target='_blank' rel="noopener noreferrer"><img className='project-image' src='/images/pro1home.jpg' alt='' /></a>
                </div>
                <div className='project-info'>
                    <h2 className='project-title'>myRestaurant</h2>
                    <ul className='project-description'>
                            <li>The project is created using React and Firebase</li>
                            <li>User needs to login in order to checkout</li>
                            <li>Payment is done using Stripe Payment</li>
                            <li>User can see his order history with realtime date and time</li>
                    </ul>
                </div>
            </div>

            <div className='project'>
                <div className='project-image'>
                    <a href='https://covid-19-0001.netlify.app/' target='_blank' rel="noopener noreferrer"><img className='project-image' src='/images/pro2home.jpg' alt='' /></a>
                </div>
                <div className='project-info'>
                    <h2 className='project-title'>covid-19 statistics</h2>
                    <ul className='project-description'>
                            <li>Project is created using React and deployed using Netlify</li>
                            <li>Data is fetched from 'disease.sh' API </li>
                            <li>Leaflet which is an open source javascript library is used for maps</li>
                            <li>User can see Infected cases, Recovered cases and Deaths across different countries</li>
                            <li>The Graph values changes in accordance with different values chosen</li>
                    </ul>
                </div>
            </div>

            <div className='project'>
                <div className='project-image'>
                    <a href='https://github-tracker-0001.netlify.app/' target='_blank' rel="noopener noreferrer"><img className='project-image' src='/images/pro3home.jpg' alt='' /></a>
                </div>
                <div className='project-info'>
                    <h2 className='project-title'>github-tracker</h2>
                    <ul className='project-description'>
                            <li>The project is created using Context API and deployed using netlify</li>
                            <li>Data is fetched using github API</li>
                            <li>User can search different Github Users</li>
                            <li>User can see some selected data about each user searched</li>
                            <li>The link will also get to the github profile of selected user</li>
                    </ul>
                </div>
            </div>

                
            </div>
        </section>
    )
}

export default Projects
