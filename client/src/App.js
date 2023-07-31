
import './App.css';
import Calendar from './pages/Calendar';
import Main from './pages/Main';
import Attendance from "./pages/Attendance";
import Travel from "./pages/Travel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
