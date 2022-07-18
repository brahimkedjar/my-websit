import React, { useEffect, useState } from "react";
import "./Contact.css";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Contact() {
  const [active, setactive] = useState(false);
  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const contact = document.querySelector(".contact");
      var contact_top = contact.getBoundingClientRect().top;

      if (contact_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`contact ${active && "active"}`} id="Contact">
      <h1>
        <span>Contact</span> <b>me</b>
      </h1>

      <div className="socials">
        <div className="icon" style={{ "--c": "#00ff00" }}>
          <BsWhatsapp className="social-icons" />
          <div className="tooltip">whatsapp</div>
        </div>

        <div className="icon" style={{ "--c": "#1d3fff" }} onClick={() => window.open("https://web.facebook.com/profile.php?id=100078014927532", "_blank")}>
          <BsFacebook className="social-icons" />
          <div className="tooltip" >facebook</div>
        </div>
        <div className="icon" style={{ "--c": "#ff5cff" }} onClick={() => window.open("https://github.com/BrahimKedjar", "_blank")}>
          <BsGithub className="social-icons" />
          <div className="tooltip" >github</div>
        </div>

        <div className="icon" style={{ "--c": "#ff0000" }}>
          <BsYoutube className="social-icons" />
          <div className="tooltip">youtube</div>
        </div>

        <div className="icon" style={{ "--c": "#6abef3" }}>
          <BsTwitter className="social-icons" />
          <div className="tooltip">twitter</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
