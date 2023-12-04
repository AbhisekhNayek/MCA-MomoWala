import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MCA Momo Wala</h2>
        <p>We are trying to give you the best taste possible.<br/>We give attention to genuine feedback.</p>
      </div>

      <aside>
        <h4 align="center">Connect With Us</h4>
        <div>
          <a href="https://youtube.com/6packprogrammer">
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/meabhisingh">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/meabhisingh">
            <AiFillGithub />
          </a>
          <a href="https://github.com/meabhisingh">
            <AiFillLinkedin />
          </a>
        </div>
      </aside>
      <div>
      <p align="right"><strong>All right received @mcamomowala</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
