import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="left">
        <div className="logo">
          <span>Đ</span>
        </div>
      </div>
      <div className="right">
        <ul className="nav-bar">
          <NavLink activeClassName="active" exact to="/">
            <li>
              <span>01.</span> About
            </li>
          </NavLink>
          <NavLink activeClassName="active" to="/experience">
            <li>
              <span>02.</span> Experience
            </li>
          </NavLink>
          <NavLink activeClassName="active" to="/projects">
            <li>
              <span>03.</span> Projects
            </li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>
              <span>04.</span> Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
