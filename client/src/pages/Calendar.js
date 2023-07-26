import React from "react";
import Logo from "./img/CYF-logo2.png";
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

      <div className="main">
        <div className="left">
          <h1>CYF Classroom Plan</h1>
          <div className="leftContent">
            <div className="leftItem">Item 1</div>
            <div className="leftItem">Item 2</div>
            <div className="leftItem">Item 3</div>
            <div className="leftItem">Item 4</div>
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
