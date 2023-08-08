import React from "react";
import "./form.css";
import Logo1 from "./img/cyfLogo1.png";

import { Link } from "react-router-dom";

function Form() {
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
        <img className="logo-img" src={Logo1} alt="logo" />
      </div>

      <div className="login">
        <span className="loginTitle">
          <img className="logo1" src={Logo1} alt="logo" />
        </span>

        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />

          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />

          <label>City</label>
          <select className="loginInput">
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
          </select>

          <label>Role</label>
          <select className="loginInput">
            <option value="volunteer">Volunteer</option>
            <option value="trainee">Trainee</option>
          </select>

          <button className="loginButton">Login</button>
        </form>
      </div>
    </>
  );
}

export default Form;
