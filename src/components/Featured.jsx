import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/Featured.css";
function Featured() {
  return (
    <div className="featuredposts">
      <h3 id="featured">Featured Posts</h3>
      <ul>
        <li>
          <a href="/">How to install a fresh windows 11</a>{" "}
        </li>
        <li>
          <a href="/">Samsung S23 Ultra privacy issues</a>
        </li>
        <li>
          <a href="/">The rise of AI-powered Internet</a>
        </li>
        <li>
          <a href="/">How to use fiverr for good income as a freelancer</a>
        </li>
        <li>
          <a href="/">
            What is the difference between shutdown-start and restart
          </a>
        </li>
        <li>
          <a href="/">How to extend any laptop's battery life</a>
        </li>
      </ul>
    </div>
  );
}

export default Featured;
