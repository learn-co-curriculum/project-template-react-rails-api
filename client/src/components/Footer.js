import React from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

function Footer() {
    return (
        <div id="footer-box">
            <div id="team-box">
                <div id="brennan">

                    <a className='footer-links' href='https://www.linkedin.com/in/brennantdavis/' target="_blank">Brennan<img width='75px' height='75px' src={linkedin} alt=''></img></a>
                </div>
                <div id="kelan">
                    <a className='footer-links' href='https://www.linkedin.com/in/kelanhamman/' target="_blank">Kelan<img width='75px' height='75px' src={linkedin} alt=''></img></a>
                </div>
                <div id="noah">
                    <a className='footer-links' href='https://www.linkedin.com/in/noahlicata/' target="_blank">Noah<img width='75px' height='75px' src={linkedin} alt=''></img></a>
                </div>
            </div>
            <div id="repo-box">
                Tools: React, Ruby on Rails, BCrypt, Heroku, Netifly. Github Repo:
                <a className='footer-links' href="https://github.com/Kelan6/Denver-City-Limit/" target="_blank"><img width='30px' height='30px' src={github} alt=''></img></a>

            </div>
        </div>
    )
}

export default Footer