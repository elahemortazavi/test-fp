import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./attendance.css";
import Logo from "./img/cyfLogo1.png";
import moment from "moment";

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
      // const inpersonVol = data.filter(
      // 	(item) =>
      // 		item.role.includes("volunteer") &&
      // 		item.attendance_type === "in-person"
      // );
      // setInPersonVolunteers(inpersonVol);
      // const onlineVol = data.filter(
      // 	(item) =>
      // 		item.role.includes("volunteer") &&
      // 		item.attendance_type === "remote"
      // );
      // setOnlineVolunteers(onlineVol);
      // const inpersonTrain = data.filter(
      // 	(item) => item.attendance_type === "in-person"
      // );
      // setInPersonTrainees(inpersonTrain);
      // const onlineTrain = data.filter(
      // 	(item) => item.attendance_type === "remote"
      // );
      // setOnlineTrainees(onlineTrain);
      // Separate volunteers and trainees based on attendance type
      const volunteers = data.filter((item) => item.role.includes("volunteer"));
      const trainees = data.filter((item) => item.role.includes("trainee"));

      // Further separate volunteers and trainees based on attendance type
      const inPersonVolunteers = volunteers.filter(
        (item) => item.attendance_type === "in-person"
      );
      const onlineVolunteers = volunteers.filter(
        (item) => item.attendance_type === "remote"
      );
      const inPersonTrainees = trainees.filter(
        (item) => item.attendance_type === "in-person"
      );
      const onlineTrainees = trainees.filter(
        (item) => item.attendance_type === "remote"
      );

      setInPersonVolunteers(inPersonVolunteers);
      setOnlineVolunteers(onlineVolunteers);
      setInPersonTrainees(inPersonTrainees);
      setOnlineTrainees(onlineTrainees);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };
  //old handlesubmit://
  // const handleSubmit = async (e) => {
  // 		e.preventDefault();
  // 		try {
  // 			const response = await fetch("api/submit-attendance", {
  // 				method: "POST",
  // 				headers: {
  // 					"Content-Type": "application/json",
  // 				},
  // 				body: JSON.stringify({
  // 					userID,
  // 					name,
  // 					role,
  // 					date,
  // 					attendanceType,
  // 				}),
  // 			});
  // 			fetchAttendanceData();
  // 		} catch (error) {
  // 			console.error("Error submitting attendance:", error);
  // 		}
  // 	};

  //new handleSubmit://
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the user has already submitted attendance
      const existingAttendance = await fetch("api/check-attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          date,
        }),
      });

      if (existingAttendance.ok) {
        // Delete the user's previous submission
        await fetch("api/delete-attendance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID,
            date,
          }),
        });
      }

      // Submit the new attendance
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

      if (response.ok) {
        fetchAttendanceData(); // Refresh the attendance data
      }
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
            <input type="text" value={name} />
          </div>
          <div className="input-container">
            <input type="text" value={role} />
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
              {/* <option value="not-attend">Not-Attend</option> */}
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
              <h3>Volunteer({inPersonVolunteers?.length || 0})</h3>
              <ul className="list">
                {inPersonVolunteers
                  ?.sort((a, b) => b.date.localeCompare(a.date))
                  .map((user) => (
                    <li key={user.name}>
                      {user.name}(
                      <span>{moment(user.date).format("Do MMMM YYYY")}</span>)
                    </li>
                  ))}
              </ul>
            </div>
            <div className="column">
              <h3>Trainee({inPersonTrainees?.length || 0})</h3>
              <ul className="list">
                {inPersonTrainees
                  ?.sort((a, b) => b.date.localeCompare(a.date))
                  .map((user) => (
                    <li key={user.name}>
                      {user.name}(
                      <span>{moment(user.date).format("Do MMMM YYYY")}</span>)
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Online</h2>
          <div className="columns">
            <div className="column">
              <h3>Volunteer({onlineVolunteers?.length || 0})</h3>
              <ul className="list">
                {onlineVolunteers
                  ?.sort((a, b) => b.date.localeCompare(a.date))
                  .map((user) => (
                    <li key={user.name}>
                      {user.name}(
                      <span>{moment(user.date).format("Do MMMM YYYY")}</span>)
                    </li>
                  ))}
              </ul>
            </div>
            <div className="column">
              <h3>Trainee({onlineTrainees?.length || 0})</h3>
              <ul className="list">
                {onlineTrainees
                  ?.sort((a, b) => b.date.localeCompare(a.date))
                  .map((user) => (
                    <li key={user.name}>
                      {user.name}(
                      <span>{moment(user.date).format("Do MMMM YYYY")}</span>)
                    </li>
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
