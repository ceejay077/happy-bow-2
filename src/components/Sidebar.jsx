/** @format */

import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaDog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "ePassbook",
      icon: <FaTh />,
    },
    {
      path: "/find-vet",
      name: "Find Vet",
      icon: <FaUserAlt />,
    },
    {
      path: "/report-missing-dog",
      name: "Report Missing Dog",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Book Session",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Settings",
      icon: <FaShoppingBag />,
    },
    {
      path: "/produt",
      name: "Payment History",
      icon: <FaShoppingBag />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className='container'>
      <div style={{ width: isOpen ? "200px" : "50px" }} className='sidebar'>
        <div className='top_section'>
          <p style={{ display: isOpen ? "block" : "none" }} className='logo'>
            <FaDog />
            Happy Baw
          </p>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassName='active'
          >
            <div className='icon'>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className='link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
