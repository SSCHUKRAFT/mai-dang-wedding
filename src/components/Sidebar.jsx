import React from 'react';
import './sidebar.css';
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiNotepad, BiTimeFive, BiParty } from "react-icons/bi";
import { ImAirplane } from "react-icons/im";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
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
      <div className="sidebar">
        <div className="bars">
          <FaBars />
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <content>{children}</content>
    </div>
  );
};

export default Sidebar;