import React from 'react';
import Logo from "./img/CYF-logo2.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="navList">
          <li className="navListItem">CYF CALENDAR</li>
          <li className="navListItem">ATTENDANCE</li>
          <li className="navListItem">TRAVEL CHECK</li>
          <li className="navListItem">ABOUT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;