import { Link, Route } from "react-router-dom";
import "./Home.css";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import ImageSlider from "./ImageSlider";
import m from './img/m.png';
import download from './img/download.png';
import sih from './img/sih.jpeg';
import para from './img/para.jpg';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Home = () => {
  const [loginClicked, setLoginClicked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoginClicked(true);
    setLoggedIn(true);

    if (loggedIn) {
      return <Route to="/dashboard" />;
    }
  };

  return (
    <ParallaxProvider>
      <div className="home-container">
      
        <nav className="navbar">
          <div className="logo-container">
            <h2>
              <span className="vault">Vault</span>X
            </h2>
          </div>
          <div className="navbar-buttons">
            <Link to="http://localhost:8000/login" onClick={handleLoginClick}>
              <button className="nav-button">Login</button>
            </Link>
            <Link to="http://localhost:8000/registration">
              <button className="nav-button">Register</button>
            </Link>
            <ScrollLink to="servicesSection" smooth={true} duration={800}>
              <button className="nav-button">Services</button>
            </ScrollLink>
          </div>
        </nav>

        <header className="header">
          <div className="overlay"></div>
          <div className="header-content">
            <h1>Welcome to VaultX</h1>
            <p>Your Secure Platform for Managing and Sharing Files</p>
            <ScrollLink to="servicesSection" smooth={true} duration={800}>
              <button className="header-button">Get Started</button>
            </ScrollLink>
          </div>
        </header>

        <div className="section1">
          <div className="justice">
            <img src={m} alt="Ministry of Law & Justice" />
          </div>
          <div className="justice">
            <img src={download} alt="Download Image" />
          </div>
          <div className="justice">
            <img src={sih} alt="Smart India Hackathon" />
          </div>
        </div>

        <div className="custom-section">
          <div className="slideshow-container">
            <ImageSlider />
          </div>
        </div>

        <Parallax y={[-20, 20]} >
          <div className="carousel-container">
            
            <div className="logo-slogan">
            
              <h2>Experience Seamless File Management</h2>
              <p>With VaultX, security and ease of use are at your fingertips.</p>
            </div>
          </div>
        </Parallax>

        <div className="services-container" id="servicesSection">
          <div className="service">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512" fill="#FFC107">
              <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
            <h3>Upload</h3>
            <p>Upload your Files securely to the VaultX platform.</p>
          </div>
          <div className="service">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512" fill="#198745">
              <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
            </svg>
            <h3>Retrieve</h3>
            <p>Easily Retrieve your stored files whenever you need them.</p>
          </div>
          <div className="service">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 576 512" fill="#DC3545">
              <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
            </svg>
            <h3>Share</h3>
            <p>Share files with others securely using VaultX sharing features.</p>
          </div>
        </div>

        <div className="additional-container">
          <h3>Getting started is quick and easy</h3>
          <div className="icon-container">
            <div className="icon1">
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512" fill="#17A2B8">
                <path d="M488 31H324.4c-13.3 0-25.4 7.5-31.4 19.4L248.9 129H23.1C10.4 129 0 139.4 0 152v304c0 26.5 21.5 48 48 48H264c13.3 0 25.4-7.5 31.4-19.4L345.1 383H488c13.3 0 24-10.7 24-24V56c0-13.3-10.7-25-24-25zM312 395L264 444V328c0-13.3-10.7-24-24-24H120V216c0-13.3-10.7-24-24-24H64V152c0-13.3 10.7-24 24-24H256v88c0 13.3 10.7 24 24 24H432v104c0 13.3-10.7 24-24 24H312zM416 256c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16s-7.2-16-16-16z" />
              </svg>
              <h3>Sign Up</h3>
            </div>
            <div className="icon2">
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 576 512" fill="#28A745">
                <path d="M573.1 229.7c-2.7-1.8-61.4-40.5-170.1-53.8c-1.5-24.5-5.7-55.7-15.5-90.4C380 35.7 354.5 0 297.8 0c-56.7 0-82.2 35.7-89.6 85.5c-9.8 34.8-14 66-15.5 90.4C84.1 189.2 25.4 227.9 22.7 229.7C8.3 238.3 0 253.9 0 270.9v36.3c0 14.8 7.3 28.7 19.4 37c8.6 6 20.5 9.7 32.7 5.7C92.6 339.3 183.8 304 288 304s195.4 35.3 235.9 45.9c12.2 3.9 24.1 .3 32.7-5.7c12.1-8.3 19.4-22.2 19.4-37V270.9C576 253.9 567.7 238.3 573.1 229.7zM280 0H152C68.3 0 0 68.3 0 152v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V232c-66.8 0-126.4-39.8-153.1-103.4C346.3 93.4 320 72 288 72S229.7 93.4 200 128.6C173.4 192.2 113.8 232 47 232V152C47 68.3 115.3 0 199 0H280z" />
              </svg>
              <h3>Upload</h3>
            </div>
            <div className="icon3">
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 576 512" fill="#DC3545">
                <path d="M0 400V464C0 490.5 21.5 512 48 512H304c26.5 0 48-21.5 48-48V400H0zM576 64H416c-26.5 0-48 21.5-48 48v128H0v-96C0 10.7 10.7 0 24 0H552C565.3 0 576 10.7 576 24V64zM432 232H576V488C576 501.3 565.3 512 552 512H360.5C362.8 507.4 364 501.7 364 496V128c0-26.5-21.5-48-48-48H312c0-8.8 7.2-16 16-16H528C544.8 64 560 79.2 560 96H432V232z" />
              </svg>
              <h3>Share</h3>
            </div>
          </div>
        </div>

        <footer>
          <p>&copy; 2023 VaultX. All rights reserved.</p>
        </footer>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
