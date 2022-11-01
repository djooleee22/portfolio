import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div id="about">
      <div className="small">Hello, my name is</div>
      <div className="name">Đorđe Antonijević.</div>
      <div className="lighter">I am front-end developer.</div>
      <p className="marbot">
        28-years old web developer, coming from Belgrade, Serbia, who is
        passionate about building dynamic and responsive web pages.
      </p>
      <p>
        Experienced in: <span>HTML5</span>, <span>CSS3</span>,{" "}
        <span>JavaScript</span>, <span>React</span> and <span>TypeScript</span>.
      </p>
    </div>
  );
};

export default About;
