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
          MY SKILLS
        </div>
        <div className="skills-container">
          <div className="column-1">
            <div className='html-percentage'>
              <div className="progress-bar"><CircularProgressbar value={90} text={`${90}%`} /></div>
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
        </div>
      </div>
      <div className="divider"></div>
      <div className="edu-and-experience">
        <div className="eduexp-header">EDUCATION & EXPERIENCE</div>
        <div className="eduexp-content">
          <div className="exp-details">
            <div className="exp-detail-container">
              <div className="work-logo-container">
                <svg className="work-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
              </div>
              <div className="job-title">Front End Developer</div>
              <div className="companyName-year">
                <div className="company-name">
                  PRO INDIA
                </div>
                <div className="year">
                  2022-Present
                </div>
              </div>
            </div>
            <div className="exp-detail-container">
              <div className="work-logo-container">
                <svg className="work-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
              </div>
              <div className="job-title">Junior Front End Developer</div>
              <div className="companyName-year">
                <div className="company-name">
                  Triyom Software Private Limited
                </div>
                <div className="year">
                  2021-2022
                </div>
              </div>
            </div>
            <div className="exp-detail-container">
              <div className="work-logo-container">
                <svg className="work-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
              </div>
              <div className="job-title">Internship - Web Develepoment</div>
              <div className="companyName-year">
                <div className="company-name">
                  Contraly Tech Pvt Ltd
                </div>
                <div className="year">
                  2020-2021
                </div>
              </div>
            </div>
          </div>
          <div className="edu-details">
            <div className="edu-detail-container">
            <div className="edu-logo-container">
            <svg className='edu-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>              </div>
              <div className="edu-title">B.E Computer Science and Engineering</div>
              <div className="eduName-year">
                <div className="edu-name">
                  Sri Sai Ram Institute of Technology
                </div>
                <div className="edu-year">
                  2017-2021
                </div>
              </div>
            </div>
            <div className="edu-detail-container">
            <div className="edu-logo-container">
            <svg className='edu-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>               </div>
              <div className="edu-title">Higher secondary education</div>
              <div className="eduName-year">
                <div className="edu-name">
                Alpha Matriculation Higher Secondary School
                </div>
                <div className="edu-year">
                  2015-2017
                </div>
              </div>
            </div>
            <div className="edu-detail-container">
            <div className="edu-logo-container">
            <svg className='edu-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>               </div>
              <div className="edu-title">Secondary School Certificate</div>
              <div className="eduName-year">
                <div className="edu-name">
                  Alpha Matriculation Higher Secondary School
                </div>
                <div className="edu-year">
                  2014-2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
