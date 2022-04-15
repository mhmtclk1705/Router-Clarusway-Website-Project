import React from "react";
import htmlLogo from "../assets/logo_html.png";
import cssLogo from "../assets/logo_css.png";
import brushLogo from "../assets/logo_brush.png";

const Card = () => {
  return (
    <div className="cwd-content">
      <div className="cwd-content-html">
        <img src={htmlLogo} alt="html" />
        <h4>HTML5 Markup</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          impedit animi eaque quidem ducimus qui!
        </p>
      </div>
      <div className="cwd-content-css">
        <img src={cssLogo} alt="css" />
        <h4>CSS3 Styling</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          neque maxime facilis omnis sapiente libero?
        </p>
      </div>
      <div className="cwd-content-gd">
        <img src={brushLogo} alt="graphic-design" />
        <h4>Graphic Design</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          quod dicta repellendus aspernatur fugit!
        </p>
      </div>
    </div>
  );
};

export default Card;
