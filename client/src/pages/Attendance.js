import React from 'react';
// import { Link } from "react-router-dom";
import Logo from "./img/CYF-logo2.png";

const Attendance = () => {
    return (
         <div className="navbar">
        <div className="container">
          <div className="logo">
            
              <img src={Logo} alt="" />
            
          </div>
          <div className="links">
            
              <h6>ART</h6>
           
          
              <h6>SCIENCE</h6>
           
            
              <h6>TECHNOLOGY</h6>
          
           
              <h6>CINEMA</h6>
           
              <h6>DESIGN</h6>
            
              <h6>FOOD</h6>
            
            
            
            
          </div>
        </div>
      </div>
    );

};

export default Attendance;