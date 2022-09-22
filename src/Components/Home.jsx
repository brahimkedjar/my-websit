import React from "react";
import "./Home.css";
import bg from "../props/1.gif";

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="bg">
        <img src={bg} alt="" />
      </div>

      <div className="content">
        <h1>
          <c>eXplore</c> my  <br />
          Home Work
        </h1>

        <a href="#Collection" className="show-me">
          <span>show me</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
