import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/CYF-logo2.png";
import Logo1 from "./img/cyfLogo1.png";
import "./main.css";

const Main = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name] = useState(user.name);

  return (
    <div>
      <div className="navbar">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/main">
              MAIN
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/calendar">
              CYF CALENDAR
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/travel">
              TRAVEL CHECK
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/attendance">
              ATTENDANCE
            </Link>
          </li>
        </ul>

        <img className="logo-img" src={Logo1} alt="logo" />
      </div>
      <div className="container">
        <div className="up2">
          <div className="up">
            <h1 className="welcome">{name} welcome to HUB PLANNER</h1>
            <p>Your Attendance, Your Journey, One Click Away!</p>
          </div>
          <div className="down">
            <div className="down">
              <div className="downLeft">
                <a
                  href="https://www.facebook.com/codeyourfuture.io/?locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="topIcon fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/codeyourfuture_/channel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="topIcon fab fa-instagram-square"></i>
                </a>
                <a
                  href="https://twitter.com/codeyourfuture?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="topIcon fab fa-twitter-square"></i>
                </a>
                <a href="mailto:contact@codeyourfuture.io">
                  <i className="topIcon fas fa-envelope-square"></i>
                </a>
              </div>
            </div>

            <img className="logo-img2" src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
