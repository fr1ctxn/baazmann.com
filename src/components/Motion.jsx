import { useEffect } from "react";
import "../styles/star.css";

function Motion() {
  useEffect(() => {
    let x1 = 0,
      y1 = 0;

    const dist_to_draw = 50,
      delay = 1000,
      fsize = ["1.1rem", "1.4rem", ".8rem", "1.7rem"],
      colors = [
        "#e23636",
        "#f9f3ee",
        "#e1f8dc",
        "#88afe6",
        "#aee1cd",
        "#5ebqe5",
      ],
      rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      selRand = (o) => o[rand(0, o.length - 1)],
      distanceTo = (x1, y1, x2, y2) =>
        Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
      shouldDraw = (x, y) => distanceTo(x1, y1, x, y) >= dist_to_draw,
      addStr = (x, y) => {
        const str = document.createElement("div");
        str.innerHTML = "&#10022;";
        str.className = "star";
        str.style.top = `${y - 50}px`;
        str.style.left = `${x}px`;
        str.style.color = selRand(colors);
        str.style.fontSize = selRand(fsize);
        document.body.appendChild(str);
        const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
        str.animate(
          {
            transform: [
              `translate(0, ${
                y + fs > window.innerHeight ? window.innerHeight - y : fs
              }px)`,
              `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`,
            ],
            opacity: [1, 0],
          },
          {
            duration: delay,
            fill: "forwards",
          }
        );

        setTimeout(() => {
          str.remove();
        }, delay);
      };

    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      if (shouldDraw(pageX, pageY)) {
        addStr(pageX, pageY);
        x1 = pageX;
        y1 = pageY;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return null; // You can return null since this component doesn't render anything
}

export default Motion;
