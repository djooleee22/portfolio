import React, { useState } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const closeHamb = () => {
    setNavOpen(false);
  };

  return (
    <header onClick={() => setNavOpen(false)} id="header">
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
        <div className="hidden">
          {!navOpen && (
            <svg
              onClick={(e) => {
                e.stopPropagation();
                setNavOpen(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ham"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
          {navOpen && (
            <ul className="mobile-nav">
              <li onClick={closeHamb}>
                <Link to="/">About</Link>
              </li>
              <li onClick={closeHamb}>
                <Link to="/experience">Experience</Link>
              </li>
              <li onClick={closeHamb}>
                <Link to="/projects">Projects</Link>
              </li>
              <li onClick={closeHamb}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
