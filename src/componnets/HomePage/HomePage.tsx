import "../HomePage/HomePage.scss"
import Manoj from "../../assets/img/Manoj.jpg"
import HomeBg from "../../assets/img/graph.png";
import MobileHomeBg from "../../assets/img/graph.png"
export const HomePage = () => {
  return (
    <div className='home-page'>
      <div className="home-bg-icon">
        <img className="home-bg" src={HomeBg} alt="" />
        {/* <div className="home-mobile-bg">
          <svg className="mobile-home-bg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFD700" d="M51.9,-50.3C66.9,-37,78.3,-18.5,75.9,-2.4C73.5,13.8,57.5,27.6,42.5,38.7C27.6,49.8,13.8,58.2,-1.9,60.2C-17.6,62.1,-35.2,57.5,-44,46.4C-52.8,35.2,-52.7,17.6,-55.4,-2.7C-58.1,-23,-63.5,-46,-54.8,-59.3C-46,-72.6,-23,-76.2,-2.2,-73.9C18.5,-71.7,37,-63.6,51.9,-50.3Z" transform="translate(100 100)" />
          </svg>
        </div> */}
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

      <div className="home-body-content-mobile">
        <div className="mobile-photo-container">
          <img className='mob-home-bg' src={MobileHomeBg} alt="" />
          <img className='mob-user-photo' src={Manoj} alt="" />
        </div>
        <div className="mob-user-description">
        <div className="mob-user-name">I'M MANOJ VT</div>
          <div className="mob-user-role">Web Developer</div>
          <div className="mob-user-desc">
            I'm a Indian based web designer & front‑end developer focused on crafting
            clean & user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </div>
          <div className="more-more-button">
            <button className="more-about-me">More About Me</button>
          </div>
        </div>
      </div>

    </div>
  )
}
