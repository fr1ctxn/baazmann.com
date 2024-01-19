import React from "react";
import "../styles/navstyles.css";
import myLogo from "../images/prollycomplete.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="star-trail"></div>
      <header>
        <div className="logo">
          <a href="/">
            <img src={myLogo} alt="home"></img>
          </a>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/" className="disabled">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="disabled">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="disabled">
                Socials
              </Link>
            </li>
            <li>
              <Link to="/" className="disabled">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </div>
  );
}

export default Navbar;
