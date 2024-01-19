import "../styles/WorksIn.css";
import imgHTML from "../images/html.png";
import imgReact from "../images/react.png";
import imgCss from "../images/tailwind-css.svg";
import imgJS from "../images/js.jpg";

function WorksIn() {
  return (
    <div className="container_work">
      <h1 id="worksin_heading5">
        The languages that I use to make attractive and interactive web designs
        are
      </h1>
      <div class="logos">
        <div class="logos-slide">
          <img src={imgHTML} />
          <img src={imgCss} />
          <img src={imgJS} />
          <img src={imgReact} />
        </div>

        <div class="logos-slide">
          <img src={imgHTML} />
          <img src={imgCss} />
          <img src={imgJS} />
          <img src={imgReact} />
        </div>
      </div>
    </div>
  );
}

export default WorksIn;
