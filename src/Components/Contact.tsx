import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <p className="email">
        Contact me via email:{" "}
        <a href="mailto:antonijevic.dj1@gmail.com">antonijevic.dj1@gmail.com</a>
        .
      </p>
      <p className="linkedin">
        Checkout my LinkedIn profile:{" "}
        <a
          href="https://www.linkedin.com/in/%C4%91or%C4%91e-antonijevi%C4%87-77319b1a3/"
          target="_blank"
        >
          linkedin.com.
        </a>
      </p>
      <p className="github">
        See all my projects:{" "}
        <a href="https://github.com/djooleee22" target="_blank">
          www.github.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
