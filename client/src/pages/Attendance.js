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





// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./attendance.css";
// import Logo from "./img/cyfLogo1.png";

// const Attendance = () => {
//   const [name, setName] = useState("");
//   const [role, setRole] = useState("");
//   const [userData, setUserData] = useState({ name: "", role: "" });
//   const [date, setDate] = useState("");
//   const [attendanceType, setAttendanceType] = useState("Attendance");
//   const [inPersonVolunteers, setInPersonVolunteers] = useState([]);
//   const [inPersonTrainees, setInPersonTrainees] = useState([]);
//   const [onlineVolunteers, setOnlineVolunteers] = useState([]);
//   const [onlineTrainees, setOnlineTrainees] = useState([]);

//   useEffect(() => {
//     fetchUserData();
//     fetchAttendanceData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch("/fetch-user-data", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUserData(data);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const fetchAttendanceData = async () => {
//     try {
//       const response = await fetch("/fetch-attendance-data", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setInPersonVolunteers(data.inPersonVolunteers);
//         setInPersonTrainees(data.inPersonTrainees);
//         setOnlineVolunteers(data.onlineVolunteers);
//         setOnlineTrainees(data.onlineTrainees);
//       }
//     } catch (error) {
//       console.error("Error fetching attendance data:", error);
//     }
//   };
  

//   const updateDisplayedData = async () => {
//     try {
//       // Fetch updated attendance data and set the state variables
//       await fetchAttendanceData();
//     } catch (error) {
//       console.error("Error updating displayed data:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/http://localhost:5000/submit-attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: userData.name,
//           role: userData.role,
//           date,
//           attendanceType,
//         }),
//       });

//       if (response.ok) {
//         // Refresh or update the displayed data after successful submission:
//         await updateDisplayedData();
//       }
//     } catch (error) {
//       console.error("Error submitting attendance:", error);
//     }
//   };

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
//         <form className="middle-container" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <input
//               type="text"
//               id="name-input"
//               placeholder="Name"
//               value={userData.name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="input-container">
//             <input
//               type="text"
//               id="role-input"
//               placeholder="Role"
//               value={userData.role}
//               onChange={(e) => setRole(e.target.value)}
//             />
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
//       <div className="container">
//         <div className="section">
//           <h2>In-Person</h2>
//           <div className="columns">
//             <div className="column">
//               <h3>Volunteer</h3>
//               <ul className="list">
//                 {inPersonVolunteers.map((user) => (
//                   <li key={user.name}>{user.name}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="column">
//               <h3>Trainee</h3>
//               <ul className="list">
//                 {inPersonTrainees.map((user) => (
//                   <li key={user.name}>{user.name}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="section">
//           <h2>Online</h2>
//           <div className="columns">
//             <div className="column">
//               <h3>Volunteer</h3>
//               <ul className="list">
//                 {onlineVolunteers.map((user) => (
//                   <li key={user.name}>{user.name}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="column">
//               <h3>Trainee</h3>
//               <ul className="list">
//                 {onlineTrainees.map((user) => (
//                   <li key={user.name}>{user.name}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Attendance;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./attendance.css";
import Logo from "./img/cyfLogo1.png";

const Attendance = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);
  const [userID, setUserID] = useState(user.id);
  const [date, setDate] = useState("");
  const [attendanceType, setAttendanceType] = useState("");
  const [inPersonVolunteers, setInPersonVolunteers] = useState();
  const [inPersonTrainees, setInPersonTrainees] = useState();
  const [onlineVolunteers, setOnlineVolunteers] = useState();
  const [onlineTrainees, setOnlineTrainees] = useState();

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch("api/fetch-attendance-data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const inpersonVol = data.filter(
        (item) =>
          item.role.includes("volunteer") &&
          item.attendance_type === "in-person"
      );
      setInPersonVolunteers(inpersonVol);
      const onlineVol = data.filter(
        (item) =>
          item.role.includes("volunteer") && item.attendance_type === "remote"
      );
      setOnlineVolunteers(onlineVol);
      const inpersonTrain = data.filter(
        (item) => item.attendance_type === "in-person"
      );
      setInPersonTrainees(inpersonTrain);
      const onlineTrain = data.filter(
        (item) => item.attendance_type === "remote"
      );
      setOnlineTrainees(onlineTrain);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/submit-attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          name,
          role,
          date,
          attendanceType,
        }),
      });
      fetchAttendanceData();
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };
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
        <form className="middle-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <label>{name}</label>
          </div>
          <div className="input-container">
            <label>{role}</label>
          </div>
          <div className="input-container">
            <input
              type="date"
              id="date-input"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            ></input>
          </div>
          <div className="attendance-select">
            <select
              className="select-container"
              id="attendanceType"
              onChange={(e) => setAttendanceType(e.target.value)}
            >
              <option>Attendance</option>
              <option value="in-person">In-Person</option>
              <option value="remote">Online</option>
              <option value="not-attend">Not-Attend</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <div className="section">
          <h2>In-Person</h2>
          <div className="columns">
            <div className="column">
              <h3>Volunteer</h3>
              <ul className="list">
                {inPersonVolunteers?.map((user) => (
                  <li key={user.name}>{user.name}</li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h3>Trainee</h3>
              <ul className="list">
                {inPersonTrainees?.map((user) => (
                  <li key={user.name}>{user.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Online</h2>
          <div className="columns">
            <div className="column">
              <h3>Volunteer</h3>
              <ul className="list">
                {onlineVolunteers?.map((user) => (
                  <li key={user.name}>{user.name}</li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h3>Trainee</h3>
              <ul className="list">
                {onlineTrainees?.map((user) => (
                  <li key={user.name}>{user.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Attendance;