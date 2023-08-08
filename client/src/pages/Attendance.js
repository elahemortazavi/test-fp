import React from "react";
import { Link } from "react-router-dom";
import "./attendance.css";
import Logo from "./img/cyfLogo1.png";

const Attendance = () => {
  return (
    <div className="top-container">
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
      <div className="middle-container">
        <form className="middle-container">
          <div className="input-container">
            <input type="text" id="name-input" placeholder="Name"></input>
          </div>
          
          <div className="role-select">
            <select className="select-container">
              <option>Role</option>
              <option value="volunteer">Volunteer</option>
              <option value="trainee">Trainee</option>
            </select>
          </div>

          <div className="input-container">
            <input type="date" id="date-input" placeholder="Date"></input>
          </div>

          <div className="attendance-select">
            <select className="select-container" id="attendanceType">
              <option>Attendance</option>
              <option value="in-person">In-Person</option>
              <option value="remote">Online</option>
            </select>
          </div>
        </form>
      </div>
      <div class="container">
        <div class="section">
          <h2>In-Person</h2>
          <div class="columns">
            <div class="column">
              <h3>Volunteer</h3>
              <ul class="list">
                <li>Name 1</li>
                <li>Name 2</li>
                <li>Name 3</li>
              </ul>
            </div>
            <div class="column">
              <h3>Trainee</h3>
              <ul class="list">
                <li>Name 1</li>
                <li>Name 2</li>
                <li>Name 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section">
          <h2>Online</h2>
          <div class="columns">
            <div class="column">
              <h3>Volunteer</h3>
              <ul class="list">
                <li>Name 1</li>
                <li>Name 2</li>
                <li>Name 3</li>
              </ul>
            </div>
            <div class="column">
              <h3>Trainee</h3>
              <ul class="list">
                <li>Name 1</li>
                <li>Name 2</li>
                <li>Name 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bottom-container">
        <div>
          <table className="custom-table">
            <caption>Remote</caption>
            <thead>
              <tr>
                <th className="border-right">Volunteers</th>
                <th>Trainee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className="custom-table">
            <caption>In-person</caption>
            <thead>
              <tr>
                <th className="border-right">Volunteers</th>
                <th>Trainee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};
export default Attendance;
