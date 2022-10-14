import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        <nav className="main-nav">
        {/* logo part */}
            <div className="logo">
                <img src="./RFA Logo Final.png" alt="RFASC Logo" />
                <h2>South Carolina</h2>
                <h2>Revenue and Fiscal Affairs Office</h2>
            </div>

            {/* 2nd menu part */}

            <div className="menu-link">
              <ul>
                <li>
                  <a href="#"> Home </a>
                </li>
                <li>
                  <a href="#"> About Us </a>
                </li>
                <li>
                  <a href="#"> Events </a>
                </li>
                <li>
                  <a href="#"> Boards and Committees </a>
                </li>
              </ul>
            </div>

            {/* Search Link */}

            <div className="search">
              <ul className= "search-icons">
                <li>
                  <a href="#">
                    <FaSearch />
                  </a>
                </li>
              </ul>
            </div>
        </nav>

        {/* hero section */}

        <section className="hero-section">
          <img src="./shutterstock_42474535.jpg" alt="hero-img" /> 
          <p>Providing insightful research, analysis, and resources </p>
          <p>to facilitate informed policy decisions and</p>  
          <p>administration of services</p>
        </section>


          {/* hamburger menu start  */}
          
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
    </>
  )
}

export default Navbar