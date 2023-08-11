// import express from "express";
// import cors from "cors"; // Import the cors package
// // import { Pool } from "pg"; // Import your database connection
// import pkg from "pg";
// const { Pool } = pkg;
 

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors()); // Use cors middleware
// app.use(express.json()); // Parse JSON requests


// import dotenv from "dotenv";
// dotenv.config();


// dotenv.config();



// const dbPool = new Pool({
//   connectionString: process.env.DB_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });






// // Fetch user data
// app.get("/fetch-user-data", async (_, res) => {
//   try {
//     // Replace 'users' with your actual table name
//     const user = await dbPool.query(
//       "SELECT name, role FROM users2 WHERE id = $1",
//       [userId]
//     ); // userId should be obtained from authentication
//     res.json(user.rows[0]);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Fetch attendance data
// app.get("/fetch-attendance-data", async (_, res) => {
//   try {
//     const attendanceData = await dbPool.query(
//       "SELECT name, role, attendance_type FROM Attendance INNER JOIN users2 ON Attendance.userID = users2.id"
//     );

//     const inPersonVolunteers = attendanceData.rows.filter(
//       (row) => row.attendance_type === "in-person" && row.role === "Volunteer"
//     );

//     const inPersonTrainees = attendanceData.rows.filter(
//       (row) => row.attendance_type === "in-person" && row.role === "Trainee"
//     );

//     const onlineVolunteers = attendanceData.rows.filter(
//       (row) => row.attendance_type === "online" && row.role === "Volunteer"
//     );

//     const onlineTrainees = attendanceData.rows.filter(
//       (row) => row.attendance_type === "online" && row.role === "Trainee"
//     );

//     res.json({
//       inPersonVolunteers,
//       inPersonTrainees,
//       onlineVolunteers,
//       onlineTrainees,
//     });
//   } catch (error) {
//     console.error("Error fetching attendance data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Submit attendance data
// app.post("/submit-attendance", async (req, res) => {
//   const { name, role, date, attendanceType } = req.body;

//   try {
//     // Replace 'Attendance' with your actual table name
//     const newAttendance = await dbPool.query(
//       "INSERT INTO Attendance (userID, name, role, date, attendance_type) VALUES ($1, $2, $3, $4, $5) RETURNING *",
//       [userId, name, role, date, attendanceType] // userId should be obtained from authentication
//     );

//     res.status(201).json(newAttendance.rows[0]);
//   } catch (error) {
//     console.error("Error submitting attendance:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });










import express from "express";
import cors from "cors";
// import { Pool } from "pg";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import dotenv from "dotenv";
dotenv.config();

const dbPool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Fetch user data
app.get("/fetch-user-data", async (req, res) => {
  try {
    // Replace 'users' with your actual table name
    const userId = getUserIdFromRequest(req); // Define a function to extract userId from the request or authentication context
    const user = await dbPool.query(
      "SELECT name, role FROM users2 WHERE id = $1",
      [userId]
    );
    res.json(user.rows[0]);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch attendance data
app.get("/fetch-attendance-data", async (_, res) => {
  try {
    const attendanceData = await dbPool.query(
      "SELECT name, role, attendance_type FROM Attendance INNER JOIN users2 ON Attendance.userID = users2.id"
    );

    const inPersonVolunteers = attendanceData.rows.filter(
      (row) => row.attendance_type === "in-person" && row.role === "Volunteer"
    );

    const inPersonTrainees = attendanceData.rows.filter(
      (row) => row.attendance_type === "in-person" && row.role === "Trainee"
    );

    const onlineVolunteers = attendanceData.rows.filter(
      (row) => row.attendance_type === "online" && row.role === "Volunteer"
    );

    const onlineTrainees = attendanceData.rows.filter(
      (row) => row.attendance_type === "online" && row.role === "Trainee"
    );

    res.json({
      inPersonVolunteers,
      inPersonTrainees,
      onlineVolunteers,
      onlineTrainees,
    });
  } catch (error) {
    console.error("Error fetching attendance data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Submit attendance data
app.post("/submit-attendance", async (req, res) => {
  const { name, role, date, attendanceType } = req.body;

  try {
    const userId = getUserIdFromRequest(req); // Define a function to extract userId from the request or authentication context
    const newAttendance = await dbPool.query(
      "INSERT INTO Attendance (userID, name, role, date, attendance_type) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [userId, name, role, date, attendanceType]
    );

    res.status(201).json(newAttendance.rows[0]);
  } catch (error) {
    console.error("Error submitting attendance:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Define a function to extract userId from the request or authentication context
function getUserIdFromRequest(req) {
  // Replace this with your actual code to get userId from authentication
  // For example, if you have user authentication middleware, you might do something like:
  // return req.user.id;
  // For now, this example returns a placeholder value "123".
   if (req.user && req.user.id) {
    return req.user.id;
}
};





////////////////////////////////
//******Attendance page******//
///////////////////////////////

// router.get("/fetch-attendance-data", async (_, res) => {
// 	try {
// 		const attendanceData = await pool.query("SELECT * FROM Attendance; ");
// 		res.json(attendanceData.rows);
// 	} catch (error) {
// 		console.error("Error fetching attendance data:", error);
// 		res.status(500).json({ error: "Internal server error" });
// 	}
// });


// // Submit attendance data
// router.post("/submit-attendance", async (req, res) => {
//   const { userID ,name, role, date, attendanceType } = req.body;

//   try {

//     const newAttendance = await pool.query(
//       "INSERT INTO Attendance (userid, name, role, date, attendance_type) VALUES ($1, $2, $3, $4, $5) RETURNING *",
//       [userID, name, role, date, attendanceType]
//     );

//     res.status(201).json(newAttendance.rows[0]);
//   } catch (error) {
//     console.error("Error submitting attendance:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
