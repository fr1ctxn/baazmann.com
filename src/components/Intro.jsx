import React, { useState } from "react";
import "../styles/Introstyles.css";
import Homecards from "./Homecards";

const Intro = () => {
  const [emailAddress] = useState("shahbaz@baazmann.com");

  const handleContactClick = () => {
    const subject = encodeURIComponent("Inquiry from Your Website");
    const body = encodeURIComponent(
      "Hi,\n\nI would like to get in touch with you."
    );

    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="intro_container">
        <div className="intro">
          <div className="brief" id="heytext">
            Hey,
          </div>

          <div className="brief" id="name">
            I'm Shahbaz
          </div>

          <div className="brief" id="more">
            your go-to front-end web developer
            <br /> Fast learner, quality results <br />
            let's create web magic together!
          </div>
          <button
            className="btnhome"
            id="start"
            type="button"
            onClick={handleContactClick}
          >
            Contact me
          </button>
        </div>
      </div>
      <Homecards />
    </div>
  );
};

export default Intro;
