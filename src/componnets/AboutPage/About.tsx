import React from 'react'
import "../AboutPage/About.scss"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const About = () => {
  return (
    <div className='about'>
      <div className="about-content">
        <div className="about-header-content">
          <div className="about-header">
            ABOUT <span style={{ color: "gold" }}> ME</span>
          </div>
          <div className="about-title-bg-text">
            RESUME
          </div>
        </div>
        <div className="about-body-content">
          <div className="about-personal-info">
            <div className="personal-info-header">PERSONAL INFOS</div>
            <div className="personal-info">
              <ul className='personal-info-left'>
                <li className="first-name">
                  <span>First Name :</span>
                  <span className='answer'> Manoj</span>
                </li>
                <li className="last-name">
                  <span>Last Name :</span>
                  <span className='answer'> VT</span>
                </li>
                <li className="age">
                  <span>Age :</span>
                  <span className='answer'> 23 Years</span>
                </li>
                <li className="nationality">
                  <span>Nationality :</span>
                  <span className='answer'> Indian</span>
                </li>
                <li className="freelance">
                  <span>Freelance :</span>
                  <span className='answer'> Available</span>
                </li>
              </ul>
              <ul className='personal-info-right'>
                <li className="address">
                  <span>Address:</span>
                  <span className='answer'> India</span>
                </li>
                <li className="phone">
                  <span>Phone :</span>
                  <span className='answer'> +91 6381302456</span>
                </li>
                <li className="email">
                  <span>Email :</span>
                  <span className='answer'> reachmanojvt@gmail.com</span>
                </li>
                <li className="instagram">
                  <span>Instagram :</span>
                  <span className='answer'> Manoj.</span>
                </li>
                <li className="freelance">
                  <span>Langages  :</span>
                  <span className='answer'> English,Tamil,Hindi</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-experience">
            <div className="experience-details">
              <div className="years-of-exp styled-border">
                <span className='number-text'>1+ </span><br />
                <span className='exp-text'>
                  Years of Experience
                </span>
              </div>
              <div className="project-completed styled-border">
                <span className='number-text'>5+ </span><br />
                <span className='exp-text'>
                  Project Completed
                </span>
              </div>
              <div className="happy-customers styled-border">
                <span className='number-text'>10+</span><br />
                <span className='exp-text'>
                  Happy Customers
                </span>
              </div>
              <div className="awards-won styled-border">
                <span className='number-text'>0</span><br />
                <span className='exp-text'>
                  Awards Won
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
      <div className="my-skills">
        <div className="my-skills-header">
          My Skills
        </div>
        <div className="skills-container">
          <div className="column-1">
            <div className='html-percentage'>
              <div className="progress-bar"><CircularProgressbar  value={90} text={`${90}%`} /></div>
              <div className="progress-bar-text">HTML</div>
            </div>
            <div className='javascript-percentage'>
              <div className="progress-bar"><CircularProgressbar value={90} text={`${90}%`} /></div>
              <div className="progress-bar-text">JAVASCRIPT</div>
            </div>
            <div className='css-percentage'>
              <div className="progress-bar"><CircularProgressbar value={90} text={`${90}%`} /></div>
              <div className="progress-bar-text">CSS</div>
            </div>
            <div className='figma-percentage'>
              <div className="progress-bar"><CircularProgressbar value={90} text={`${90}%`} /></div>
              <div className="progress-bar-text">FIGMA</div>
            </div>
          </div>
          <div className="column-2">
            <div className='adobe-percentage'>
              <div className="progress-bar"><CircularProgressbar value={80} text={`${80}%`} /></div>
              <div className="progress-bar-text">ADBOBE XD</div>
            </div>
            <div className='react-percentage'>
              <div className="progress-bar"><CircularProgressbar value={80} text={`${80}%`} /></div>
              <div className="progress-bar-text">REACT</div>
            </div>
            <div className='angular-percentage'>
              <div className="progress-bar"><CircularProgressbar value={80} text={`${80}%`} /></div>
              <div className="progress-bar-text">ANGULAR</div>
            </div>
            <div className='wordpress-percentage'>
              <div className="progress-bar"><CircularProgressbar value={50} text={`${50}%`} /></div>
              <div className="progress-bar-text">WORDPRESS</div>
            </div>
          </div>
          <div className="divider"></div>

        </div>
      </div>
    </div>
  )
}
