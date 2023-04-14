import React, { useState } from 'react';
import './sidebar.css';
import Icon from "../assets/sidebar-ring.svg"
import { AiFillHome } from "react-icons/ai";
import { BiNotepad, BiTimeFive, BiParty } from "react-icons/bi";
import { ImAirplane } from "react-icons/im";
import { NavLink } from 'react-router-dom';

function Sidebar({children, sidebarOpen, setSidebarOpen}) {
  const menuItem = [
    {
      path:"/",
      name:"Home",
      icon:<AiFillHome />
    },
    {
      path:"/rsvp",
      name:"RSVP",
      icon:<BiNotepad />
    },
    {
      path:"/timeline",
      name:"Timeline",
      icon:<BiTimeFive />
    },
    {
      path:"/travel",
      name:"Travel",
      icon:<ImAirplane />
    },
    {
      path:"/weddingParty",
      name:"Wedding Party",
      icon:<BiParty />
    }
  ];

  const [isAnimating, setIsAnimating] = useState(false);
  const [isScaledUp, setIsScaledUp] = useState(false);
  const [isAnimatingDown, setIsAnimatingDown] = React.useState(false);

  function handleSidebarChange() {
    if (isScaledUp) {
      setIsAnimatingDown(true);
      setTimeout(() => {
        setIsScaledUp(false);
        setIsAnimatingDown(false);
        setSidebarOpen(!sidebarOpen);
      }, 300); // the same duration as the animation
    } else {
      setIsAnimating(true);
      setIsScaledUp(true);
      setSidebarOpen(!sidebarOpen);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // the same duration as the animation
    }
  }

  return (
    <div className="container">
      <div className={`menu-container ${isAnimating ? 'animate' : ''} ${isScaledUp ? 'scaled-up' : ''} ${isAnimatingDown ? 'animate-down' : ''}`} onClick={handleSidebarChange}>
        <div className="menu-content">
          <img src={Icon} alt="ring-icon" width={50} height={35} />
          <div className="menu-txt">Menu</div>
        </div>
      </div>
      <div className="sidebar">
        {sidebarOpen ?
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" onClick={handleSidebarChange}>
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))
          : null
        }
      </div>
      {children}
    </div>
  );
};

export default Sidebar;