import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Doctor from './Components/Doctor';
import Admin from './Components/Admin';
import Register from './Components/Register';
import Patients from './Components/Patient';
import'./Navbar.css';
import Appointments from './Components/Appointments';




function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/Doctor">Doctor</NavLink>
        </li>
        <li>
          <NavLink to="/Appointments">bookAppointment</NavLink>
        </li>
       
        <li>
          <NavLink to="/Patients">Patients</NavLink>
        </li>
       
       
        <li>
          <NavLink to="/login">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/Register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Doctor" element={<Doctor/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Patients" element={<Patients/>} />
          <Route path="/Appointments"element={<Appointments/>}/>
  
         
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
