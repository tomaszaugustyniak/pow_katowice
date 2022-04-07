import React from 'react'
import BackgroundVideo from "../videos/bg-video-test.mp4"
import "./Header.scss"

function Header() {
  return (
    <header className='header'>
      <div className="header-container">             
      
      <video className="header-background-vid"
           autoPlay
            loop
            muted
          >
              <source  src={BackgroundVideo} type="video/mp4"/>
        </video> 

       <div className="background-vid-overlay">
            <div className="main-banner">
              <div className="main-banner-title">
                <h1>Lorem, ipsum.</h1>
              </div>

              <div className="main-banner-text">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>


        </div> 
       </div>
    </header>
  )
}

export default Header