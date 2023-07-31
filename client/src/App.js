
import './App.css';
import Calendar from './pages/Calendar';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter> 
       <Routes>
      
         <Route path='/'  element={ <Main />} />
         <Route path='/calendar'  element={ <Calendar />} />

       </Routes>
      </BrowserRouter> 
      
    
  );
}

export default App;
