import React, { useEffect, useState } from "react";
import "./Section2.css";

function Details() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const section2 = document.querySelector(".section2");
      var section2_top = section2.getBoundingClientRect().top;

      if (section2_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`section2 ${active && "active"}`} id="Section2">
      <div className="text-content">
        <div className="text text1">
          <h1>
            About <span>Me</span>
          </h1>
          <h2>
            Étudiant en master Ingénierie des Données et Technologie Web à
            l'Université Ferhat Abbas, j'ai de l'expérience avec un large éventail de
            langages de programmation et de technologies, j'ai excellé dans mes
            études grâce à de grandes compétences en résolution de problèmes, en
            travail d'équipe et en leadership.
          </h2>
        </div>

        <div className="text text2">
          <h1>
            <span>Experiences</span> so far
          </h1>
          <h2>
          
            ↪Front-End Coding<br/>
            ↪Back-End Coding<br />
            ↪Database administration and website design<br />
            ↪Build Web Site With Wordpress And Ecommerce<br />
            ↪Connaissance des API et des webservices.<br />
            ↪Problem-Solving<br />
            ↪Project Management Tools<br />
            ↪Strong Communication

          </h2>
        </div>
      </div>

      <div className="progress">
        <div className="container" style={{ "--x": 1 }}>
          <h2>1</h2>
          <span>Lorem</span>
        </div>

        <div className="container" style={{ "--x": 2 }}>
          <h2>2</h2>
          <span>Ipsum</span>
        </div>

        <div className="container" style={{ "--x": 3 }}>
          <h2>3</h2>
          <span>Dolor</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
