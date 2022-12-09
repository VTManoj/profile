import React from 'react'
import "../HomePage/HomePage.scss"
import Manoj from "../../assets/img/Manoj.jpg"
export const HomePage = () => {
  return (
    <div className='home-page'>
      <div className="home-header-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="1423.808" height="146.245" viewBox="0 0 1423.808 146.245">
          <g id="Group_1" data-name="Group 1" transform="translate(-554.474 -104)">
            <path id="wave" d="M56.676,51.384l7.337-7.905C71.35,35.573,86.023,19.763,100.7,9.239c14.673-10.721,29.347-15.662,44.02,5.237C159.39,35.573,174.063,83,188.737,104.1c14.673,20.9,29.347,15.958,44.02,5.237C247.43,98.814,262.1,83,276.777,69.812,291.45,56.818,306.124,45.949,320.8,54c14.673,7.757,29.347,34.437,44.02,42.194,14.673,8.053,29.347-2.816,44.02-15.81,14.673-13.192,29.347-29,44.02-34.288,14.673-5.089,29.347-.148,44.02,18.478C511.551,83,526.225,114.624,540.9,122.53s29.347-7.905,44.02-15.81,29.347-7.905,44.02-21.1c14.673-12.994,29.347-39.674,44.02-47.431,14.673-8.053,29.347,2.816,44.02,0C731.652,35.573,746.325,19.763,761,25.05c14.673,5.089,29.347,31.769,44.02,52.668,14.673,21.1,29.347,36.907,44.02,23.715,14.673-12.994,29.347-55.484,44.02-60.573,14.673-5.287,29.347,26.334,44.02,34.239s29.347-7.905,44.02-10.524c14.673-2.816,29.347,8.053,44.02,10.524s29.347-2.47,44.02-7.905,29.347-10.375,44.02-23.715,29.347-34.091,44.02-31.62,29.347,29.15,44.02,29c14.673.148,29.347-26.532,44.02-34.288,14.673-8.053,29.347,2.816,44.02,21.1s29.347,44.96,44.02,60.622c14.673,15.958,29.347,20.9,36.683,23.715l7.337,2.619v31.62H0" transform="translate(1978.281 250.245) rotate(180)" fill="gold" />
            <path id="Path_1" data-name="Path 1" d="M608.415,138.67l-30.644-15.792-24.6-17,55.244-1.729Z" transform="translate(1.303 0.064)" fill="gold" />
          </g>
        </svg>
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

      <div className="foooter-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="1425.636" height="146.245" viewBox="0 0 1425.636 146.245">
          <g id="Group_2" data-name="Group 2" transform="translate(1980.11 250.245) rotate(180)">
            <path id="wave" d="M56.749,51.384,64.1,43.478c7.346-7.905,22.038-23.715,36.731-34.239C115.518-1.482,130.21-6.423,144.9,14.477,159.595,35.573,174.287,83,188.979,104.1c14.692,20.9,29.384,15.958,44.077,5.237C247.748,98.814,262.44,83,277.132,69.812,291.825,56.818,306.517,45.949,321.209,54,335.9,61.759,350.594,88.439,365.286,96.2c14.692,8.053,29.384-2.816,44.077-15.81,14.692-13.192,29.384-29,44.077-34.288,14.692-5.089,29.385-.148,44.077,18.478C512.208,83,526.9,114.624,541.592,122.53s29.384-7.905,44.077-15.81,29.384-7.905,44.077-21.1c14.692-12.994,29.384-39.674,44.077-47.431,14.692-8.053,29.384,2.816,44.077,0,14.692-2.619,29.385-18.429,44.077-13.142,14.692,5.089,29.384,31.769,44.077,52.668,14.692,21.1,29.385,36.907,44.077,23.715,14.692-12.994,29.384-55.484,44.077-60.573C908.9,35.573,923.59,67.194,938.283,75.1s29.385-7.905,44.077-10.524c14.692-2.816,29.385,8.053,44.077,10.524s29.385-2.47,44.077-7.905,29.384-10.375,44.077-23.715,29.385-34.091,44.077-31.62,29.385,29.15,44.077,29c14.692.148,29.385-26.532,44.077-34.288,14.692-8.053,29.384,2.816,44.077,21.1s29.384,44.96,44.077,60.622c14.692,15.958,29.384,20.9,36.731,23.715l7.346,2.619v31.62H0" transform="translate(1980.11 250.245) rotate(180)" fill="gold" />
            <path id="Path_1" data-name="Path 1" d="M608.486,138.67,577.8,122.878l-24.632-17,55.315-1.729Z" transform="translate(1.303 0.064)" fill="gold" />
          </g>
        </svg>

      </div>

    </div>
  )
}