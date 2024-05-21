import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink, Route } from 'react-router-dom';
import UserProfile from '../../pages/UserProfile/UserProfile';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`nav__cont ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={toggleExpand}
      onMouseLeave={toggleExpand}
    >
      <svg style={{ display: 'none' }}>
        <defs>
          <g id="home">
            <path fill="#FFFFFF" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
          </g>
          <g id="search">
            <path fill="#FFFFFF" d="M22.9,20.1h-1.5l-0.5-0.5c1.8-2.1,2.9-4.8,2.9-7.7C23.8,5.3,18.5,0,11.9,0S0,5.3,0,11.9s5.3,11.9,11.9,11.9c3,0,5.7-1.1,7.7-2.9l0.5,0.5v1.4l9.1,9.1l2.7-2.7L22.9,20.1z M11.9,20.1c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S16.4,20.1,11.9,20.1z"></path>
          </g>
          <g id="map">
            <path fill="#FFFFFF"  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>
          </g>
          <g id="planner">
            <path fill="#FFFFFF" d="M28.4,3.6h-1.8V0h-3.6v3.6H8.9V0H5.3v3.6H3.6C1.6,3.6,0,5.1,0,7.1L0,32c0,2,1.6,3.6,3.6,3.6h24.9c2,0,3.6-1.6,3.6-3.6V7.1C32,5.1,30.4,3.6,28.4,3.6z M28.4,32H3.6V12.4h24.9V32z M7.1,16H16v8.9H7.1V16z"></path>
          </g>
        </defs>
      </svg>
      <nav>
        <ul className="nav">
          <li className="nav__items">
            <svg className="svg-icon"  viewBox="0 0 576 512">
              <use xlinkHref="#home"></use>
            </svg>
            <a href="#">Home</a>
          </li>
          <li className="nav__items">
            <svg className="svg-icon" viewBox="0 0 32 32">
              <use xlinkHref="#search"></use>
            </svg>
            <a href="#">Search</a>
          </li>
          <li className="nav__items">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <use xlinkHref="#map"></use>
            </svg>
            <NavLink to="/transaction" activeClassName="active">Transaction</NavLink>
          </li>
          <li className="nav__items">
            <svg className="svg-icon" viewBox="0 0 32 35.6">
              <use xlinkHref="#planner"></use>
            </svg>
            <a href="#">Planner</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
