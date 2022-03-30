import React, {Component} from 'react'
import "./Navbar.scss";


function Navbar() {

    return (
   <div className="navbar">
        <div className="navbar-container">
           <a href="/" className="navbar-logo">POW KATOWICE</a>
           <ul className="navbar-menu">
             <a href="" className="navbar-menu-link">   <li className="navbar-menu-link">o nas</li> </a>
             <a href="" className="navbar-menu-link">   <li className="navbar-menu-link">nasze placówki</li></a>
             <a href="" className="navbar-menu-link">   <li className="navbar-menu-link">aktualności</li></a>
           </ul>
        </div>
    </div>
  )
}

export default Navbar