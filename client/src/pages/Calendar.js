import React from "react";
import Logo from "./img/cyfLogo1.png";
import "./calendar.css";

const Calendar = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="navList">
          <li className="navListItem">CYF CALENDAR</li>
          <li className="navListItem">ATTENDANCE</li>
          <li className="navListItem">TRAVEL CHECK</li>
          <li className="navListItem">ABOUT US</li>
        </ul>
        <img className="logo-img" src={Logo} alt="logo" />
      </div>
      <h1>CYF Classroom Plan</h1>
      <div className="main">
        <div className="left">
          <div className="leftContent">
            <div className="leftItem" id="week">Week 20</div>
            <div className="leftItem">React</div>
            <div className="leftItem">Saturday 23 July 2023</div>
            <div className="leftItem">10:00 - 17:00</div>
          </div>
        </div>
        <div className="right">
          <div className="rightContent">
            <button className="agendaButton">Agenda</button>
            <button className="syllabusButton">Syllabus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
