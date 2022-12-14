import React from 'react'
import "../HomePage/HomePage.scss"
import Manoj from "../../assets/img/Manoj.jpg"
import HomeBg from "../../assets/img/graph.png";
export const HomePage = () => {
  return (
    <div className='home-page'>
      <div className="home-bg-icon">
        <img className="home-bg" src={HomeBg} alt="" />
      </div>

      <div className="home-body-content">
        <div className="home-content-left">
          <div className="photo-shadow"></div>
          <div className="photo-container"><img className='user-photo' src={Manoj} alt="" /></div>
        </div>
        <div className="home-content-right">
          <div className="user-name">I'M MANOJ VT</div>
          <div className="user-role">Web Developer</div>
          <div className="user-desc">
            I'm a Indian based web designer & front‑end developer focused on crafting
            clean & user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </div>
        </div>

      </div>

    </div>
  )
}
