import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/cyfLogo1.png";
import "./travelCheck.css";

const TravelCheck = () => {
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
        <img className="logo-img" src={Logo} alt="logo" />
      </div>
      <div className="Right">
        <div className="">
          <button className="Travelbutton">Check Travel Disruption</button>
        </div>
        <div className="">
          <button className="Datebutton">Date</button>
        </div>
      </div>

      <div className="list-container">
        <div className="list">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TravelCheck;
