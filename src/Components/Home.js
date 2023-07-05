// import React from 'react'

// import { useNavigate } from "react-router-dom";
// import { useEffect } from 'react';
// import { useState } from 'react';

// export default function Home() {
//     const navigate =useNavigate();
    
//     const[Adminlist,listupdate]=useState(null);
//     useEffect(()=>{
//         let username =sessionStorage.getItem('username');
//         if(username===''|| username===null){
//             navigate('/login')
//         }
//         let jwttoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI4ZmQ2ZGI3Mi02MWMxLTQ5MzEtOTQwMS02MGVhZTM2MjRiYzIiLCJpYXQiOiIwMy0wNy0yMDIzIDEwLjE4LjQ5IEFNIiwiQWRtaW5OYW1lIjoiYXNpYmhhIiwiQWRtaW5QYXNzd29yZCI6ImFzaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjg4Mzc5ODI5LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.BOm1meNMgdoKKtonbfriLM_H4LBemvtw_v_YD3CkTPI'
// // let token=localStorage.getItem('token');
//  fetch("https://localhost:7171/api/Admin",
//  {
//     headers:{
//         'Authorization':'Bearer'+jwttoken
//     }

//  })
//  .then((res)=>{
//     return res.json();
//  })
//  .then((resp)=>{
//     // console.log(resp);
//     listupdate(resp);
//  })
//  .catch((err)=>{
  
//     console.log(err.message)
//  })
// },
// []);
//   return (
//     <div>Home Components</div>
//   )
// }
import React from 'react';
import './Home.css';




const Home = () => {
  return (
   <div className="home-container">
   <h1 className="home-title">Welcome to our HealthCare</h1>
   <p className='title'>We Are Here to Make You Feel Good</p>
 
   <footer className="footer">
     <div className="footer-container">
       <div className="footer-section">
         <h2>Hospital Address</h2>
         <p>123 OMR, CHENNAI</p>
         <p>Tamil Nadu, India -636001</p>
       </div>
       <div className="footer-section">
         <h2>Phone Number</h2>
         <p className='hel'>+1 123 456 7890</p>
       </div>
       <div className="footer-section">
         <h2>Email</h2>
         <p>info@hospital.com</p>
       </div>
       
      
     </div>
   </footer>
 </div>
 
  );
};

export default Home;







