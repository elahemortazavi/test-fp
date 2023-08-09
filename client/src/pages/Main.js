import React from 'react';
import Logo from "./img/CYF-logo2.png";
import Logo1 from "./img/cyfLogo1.png"
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              MAIN
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/calendar">
              CYF CALENDAR
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/attendance">
              ATTENDANCE
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/travel">
              TRAVEL CHECK
            </Link>
          </li>
        </ul>
        <img className="logo1" src={Logo1} alt="logo" />
      </div>

      <div className="container">
        <div className="up">
          <h1>Hub Planner</h1>
          <p>"Your Attendance, Your Journey, One Click Away!"</p>
        </div>
        <div className="down">
          <div className="downLeft">
            <a href="https://www.facebook.com/codeyourfuture.io/?locale=en_GB">
              <i className="topIcon fab fa-facebook-square"></i>
            </a>

            <a href="https://www.instagram.com/codeyourfuture_/channel/">
              <i className="topIcon fab fa-instagram-square"></i>
            </a>

            <a href="https://twitter.com/codeyourfuture?lang=en">
              <i className="topIcon fab fa-twitter-square"></i>
            </a>
          </div>
          <img className="logo-img" src={Logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Main;