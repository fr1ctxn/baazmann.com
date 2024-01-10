import React, { useState } from "react";
import "../styles/Introstyles.css";
import imgHTML from "../images/html.png";
import imgReact from "../images/react.png";
import imgCss from "../images/css.png";
import imgJS from "../images/js.png";
import imgCode from "../images/codesnipppet.png";

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

  const SkillSection = ({ title, imgSrc, altText, link, description }) => (
    <div className="lang_intro">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          alt={altText}
          style={{ width: "150px", height: "auto" }}
        />
      </a>
      <div className="description">
        <b>
          <i>{title}</i>
        </b>{" "}
        {description}
      </div>
    </div>
  );

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
      <div className="skills_container">
        <div className="intro brief2" id="heytext2">
          <span
            style={{
              fontStyle: "italic",
              marginBottom: "20px",
            }}
          >
            I excel in
          </span>
        </div>
        <div className="intro2 brief" id="more">
          <div className="lang_row1">
            <SkillSection
              title="React"
              imgSrc={imgReact}
              altText="React"
              link="https://react.dev/"
              description="is a component-based framework that I use to make web apps. It helps me to make apps full of features and fast. Moreover, it makes a single page application which does not need reloading on the click of any link or button."
            />
            <SkillSection
              title="JavaScript"
              imgSrc={imgJS}
              altText="JavaScript"
              link="https://developer.mozilla.org/en-US/docs/Web/javascript"
              description="is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
            />
          </div>
          <div className="lang_row2">
            <SkillSection
              title="HTML"
              imgSrc={imgHTML}
              altText="HTML"
              link="https://developer.mozilla.org/en-US/docs/Web/HTML"
              description="(Hypertext Markup Language) is the fundamental language for creating structured documents on the web. It uses a system of tags to define the structure and content of a webpage, encompassing elements like headings, paragraphs, links, and images. It is similar to the skeletal system in a human body."
            />
            <SkillSection
              title="CSS"
              imgSrc={imgCss}
              altText="CSS"
              link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              description=" (Cascading Style Sheets) is a styling language used in web development to control the presentation and layout of HTML documents. It enables the separation of content from design, allowing developers to define the visual appearance of elements. Overall, it makes the website good-looking."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
