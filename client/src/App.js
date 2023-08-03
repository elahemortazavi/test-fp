
import './App.css';
import Calendar from './pages/Calendar';
import Main from './pages/Main';
import Login from "./pages/Login";
import Attendance from "./pages/Attendance";
import TravelCheck from "./pages/TravelCheck";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/travel" element={<TravelCheck />} />
      </Routes>
    
  );
}

export default App;
