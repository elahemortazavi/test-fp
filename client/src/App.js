
import './App.css';
import Calendar from './pages/Calendar';
import Main from './pages/Main';
import Login from "./pages/Login";
import Form from "./pages/form";
import Attendance from "./pages/Attendance";
import TravelCheck from "./pages/Travel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/travel" element={<TravelCheck />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
