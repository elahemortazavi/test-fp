import moment from "moment";
import React, { useState } from "react";
function Breakout() {
  // Existing code for state variables and handlers...
  // New state for breakout rooms
  const [breakoutRooms, setBreakoutRooms] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const handleViewAttendeesByDate = async (e) => {
    setSelectedDate(e.target.value);
    if (e.target.value) {
      try {
        const response = await fetch("api/fetch-attendees-by-date", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: e.target.value }),
        });
        const data = await response.json();
        console.log(data);
        const volunteers = data.filter((item) =>
          item.role.includes("volunteer")
        );

        const trainees = data.filter((item) => item.role.includes("trainee"));
        const inPersonVolunteers = volunteers.filter(
          (item) => item.attendance_type === "in-person"
        );
        const onlineVolunteers = volunteers.filter(
          (item) => item.attendance_type === "remote"
        );
        const inPersonTrainees = trainees.filter(
          (item) => item.attendance_type === "in-person"
        );
        console.log(inPersonTrainees);
        const onlineTrainees = trainees.filter(
          (item) => item.attendance_type === "remote"
        );
        console.log(onlineTrainees);
        const shuffledInPersonVolunteers = shuffleArray(inPersonVolunteers);
        const shuffledOnlineVolunteers = shuffleArray(onlineVolunteers);
        const shuffledInPersonTrainees = shuffleArray(inPersonTrainees);
        const shuffledOnlineTrainees = shuffleArray(onlineTrainees);
        const newBreakoutRooms = [];
        // In-Person Rooms
        const inPersonRoomCount = Math.ceil(
          (shuffledInPersonVolunteers.length +
            shuffledInPersonTrainees.length) /
            5
        );
        for (let i = 0; i < inPersonRoomCount; i++) {
          const roomAttendees = [];
          // Add volunteers to the room
          if (shuffledInPersonVolunteers.length > 0) {
            roomAttendees.push(shuffledInPersonVolunteers.pop());
          }
          // Add trainees to the room
          while (roomAttendees.length < 5) {
            if (shuffledInPersonTrainees.length > 0) {
              roomAttendees.push(shuffledInPersonTrainees.pop());
            } else {
              break;
            }
          }
          if (
            roomAttendees.filter((attendee) => attendee.role === "trainee")
              .length >= 3
          ) {
            newBreakoutRooms.push({
              roomType: "In-Person",
              attendees: roomAttendees,
            });
          } else {
            // Put trainees in existing rooms
            for (const room of newBreakoutRooms) {
              if (
                room.roomType === "In-Person" &&
                room.attendees.filter((attendee) => attendee.role === "trainee")
                  .length < 5
              ) {
                room.attendees.push(
                  ...roomAttendees.filter(
                    (attendee) => attendee.role === "trainee"
                  )
                );
                break;
              }
            }
          }
          const onlineRoomCount = Math.ceil(
            (shuffledOnlineVolunteers.length + shuffledOnlineTrainees.length) /
              5
          );
          for (let i = 0; i < onlineRoomCount; i++) {
            const roomAttendees = [];
            // Add volunteers to the room
            if (shuffledOnlineVolunteers.length > 0) {
              roomAttendees.push(shuffledOnlineVolunteers.pop());
            }
            // Add trainees to the room
            while (roomAttendees.length < 5) {
              if (shuffledOnlineTrainees.length > 0) {
                roomAttendees.push(shuffledOnlineTrainees.pop());
              } else {
                break;
              }
            }
            if (
              roomAttendees.filter((attendee) => attendee.role === "trainee")
                .length >= 3
            ) {
              newBreakoutRooms.push({
                roomType: "Online",
                attendees: roomAttendees,
              });
            } else {
              // Put trainees in existing rooms
              for (const room of newBreakoutRooms) {
                if (
                  room.roomType === "Online" &&
                  room.attendees.filter(
                    (attendee) => attendee.role === "trainee"
                  ).length < 5
                ) {
                  room.attendees.push(
                    ...roomAttendees.filter(
                      (attendee) => attendee.role === "trainee"
                    )
                  );
                  break;
                }
              }
            }
          }
        }
        // ... (same logic for online rooms)
        setBreakoutRooms(newBreakoutRooms);
      } catch (error) {
        console.error("Error fetching attendees by date:", error);
      }
    }
  };
  // New function to calculate breakout rooms
  // Existing code for handleDateChange, handleAttendanceTypeChange, handleSubmit, handleViewAttendeesByDate...
  // Existing JSX for rendering the form, attendance lists, and view by date...
  // New JSX for rendering breakout rooms
  const renderBreakoutRooms = () => {
    return (
      <div className="section">
        <h2>Breakout Rooms</h2>
        <div className="columns">
          {breakoutRooms.map((room, index) => (
            <div className="column" key={index}>
              <h3>
                {room.roomType} Room {index + 1}
              </h3>
              <ul className="list">
                {room.attendees.map((user) => (
                  <li key={user.name}>
                    {user.name} (
                    <span>{moment(user.date).format("Do MMMM YYYY")}</span>)
                    <span>: {user.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="top-container">
      <div className="datepicker-container">
        <h3>Select A date</h3>
        <input
          type="date"
          id="datepicker"
          onChange={handleViewAttendeesByDate}
          value={selectedDate}
        />
      </div>
      {renderBreakoutRooms()}
    </div>
  );
}
export default Breakout;
