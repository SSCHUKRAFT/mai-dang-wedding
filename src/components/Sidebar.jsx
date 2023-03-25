import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { FaBars } from "react-icons/fa";
import Icon from "../assets/sidebar-ring.svg"
import { AiFillHome } from "react-icons/ai";
import { BiNotepad, BiTimeFive, BiParty } from "react-icons/bi";
import { ImAirplane } from "react-icons/im";
import { NavLink } from 'react-router-dom';

/**
 * TODO: refactor sidebar's style.
 * MAYBE: put all of sidebar into 
 */

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
  ]

  return (
    <div className="container">
      <div className="menu-container" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <img src={Icon} alt="ring-icon" width={50} height={35} />
        <div className="menu-txt">Menu</div>
      </div>
      <div className="sidebar">
        {sidebarOpen ?
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link">
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