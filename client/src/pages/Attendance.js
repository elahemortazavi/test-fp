// import React from "react";
// import { Link } from "react-router-dom";
// import "./attendance.css";
// import Logo from "./img/cyfLogo1.png";

// const Attendance = () => {
//   return (
//     <div className="top-container">
//       <div className="navbar">
//         <ul className="navList">
//           <li className="navListItem">
//             <Link className="link" to="/main">
//               MAIN
//             </Link>
//           </li>
//           <li className="navListItem">
//             <Link className="link" to="/calendar">
//               CYF CALENDAR
//             </Link>
//           </li>
//           <li className="navListItem">
//             <Link className="link" to="/attendance">
//               ATTENDANCE
//             </Link>
//           </li>
//           <li className="navListItem">
//             <Link className="link" to="/travel">
//               TRAVEL CHECK
//             </Link>
//           </li>
//         </ul>
//         <img className="logo-img" src={Logo} alt="logo" />
//       </div>
//       <div className="middle-container">
//         <form className="middle-container">
//           <div className="input-container">
//             <input type="text" id="name-input" placeholder="Name"></input>
//           </div>


//           <div className="input-container">
//             <input type="text" id="role-input" placeholder="Role"></input>
//           </div>

//           <div className="input-container">
//             <input type="date" id="date-input" placeholder="Date"></input>
//           </div>

//           <div className="attendance-select">
//             <select className="select-container" id="attendanceType">
//               <option>Attendance</option>
//               <option value="in-person">In-Person</option>
//               <option value="remote">Online</option>
//               <option value="not-attend">Not-Attend</option>
//             </select>
//           </div>
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//       <div class="container">
//         <div class="section">
//           <h2>In-Person</h2>
//           <div class="columns">
//             <div class="column">
//               <h3>Volunteer</h3>
//               <ul class="list">
//                 <li>Name 1</li>
//                 <li>Name 2</li>
//                 <li>Name 3</li>
//               </ul>
//             </div>
//             <div class="column">
//               <h3>Trainee</h3>
//               <ul class="list">
//                 <li>Name 1</li>
//                 <li>Name 2</li>
//                 <li>Name 3</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div class="section">
//           <h2>Online</h2>
//           <div class="columns">
//             <div class="column">
//               <h3>Volunteer</h3>
//               <ul class="list">
//                 <li>Name 1</li>
//                 <li>Name 2</li>
//                 <li>Name 3</li>
//               </ul>
//             </div>
//             <div class="column">
//               <h3>Trainee</h3>
//               <ul class="list">
//                 <li>Name 1</li>
//                 <li>Name 2</li>
//                 <li>Name 3</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Attendance;





import React from "react";
import { Link } from "react-router-dom";
import "./attendance.css";
import Logo from "./img/cyfLogo1.png";
import { useEffect, useState } from "react";

const Attendance = () => {
  const [userData, setUserData] = useState({ name: "", role: "" });
  const [date, setDate] = useState("");
  const [attendanceType, setAttendanceType] = useState("Attendance");
  const [inPersonVolunteers, setInPersonVolunteers] = useState([]);
  const [inPersonTrainees, setInPersonTrainees] = useState([]);
  const [onlineVolunteers, setOnlineVolunteers] = useState([]);
  const [onlineTrainees, setOnlineTrainees] = useState([]);

    useEffect(() => {
      fetchUserData();
      fetchAttendanceData();
    }, []);

    const fetchUserData = async () => {
    // ... (existing fetchUserData code)
  };

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch("/fetch-attendance-data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Filter and set data in the appropriate state variables
        setInPersonVolunteers(data.inPersonVolunteers);
        setInPersonTrainees(data.inPersonTrainees);
        setOnlineVolunteers(data.onlineVolunteers);
        setOnlineTrainees(data.onlineTrainees);
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  // ... (handleSubmit and return JSX)
};

export default Attendance;
