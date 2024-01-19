import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation if using React Router
import "../styles/BlogNavbar.css";
import imgBlogLogo from "../images/bazblg.png";
function BlogNavbar() {
  return (
    <nav className="blog-navbar">
      <div className="blog_logo">
        <Link to="/">BAAZMANN</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BlogNavbar;
