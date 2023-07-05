import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
import axios from 'axios'


export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [role, setrole] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
   
  }, []);

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      let inputObj = {
        adminName: userEmail,
        adminPassword: password
      };
      if(role==='Admin')
      {
        console.log(role)
        axios.post('https://localhost:7171/api/Login/Admin', inputObj)
        .then(response => {
          localStorage.setItem('Admin_Token',response.data)
        })
        .catch(error => {
         alert('Invalid credentials!!')
        });
      }
      else if(role==='Patient')
      {
        console.log(role)
        axios.post('https://localhost:7171/api/Login/Patient', {
            patientEmail:inputObj.adminName,
            patientPass:inputObj.adminPassword
        })
        .then(response => {
          localStorage.setItem('Patient_Token',response.data)
        })
        .catch(error => {
         alert('Invalid credentials!!')
        });
      }
      else{
        console.log("this",role)
        axios.post('https://localhost:7171/api/Login/Doctor', {
            docEmail:inputObj.adminName,
            docPas:inputObj.adminPassword
        })
        .then(response => {
          localStorage.setItem('Doctor_Token',response.data)
        })
        .catch(error => {
         alert('Invalid credentials!!')
        });
      }
    }
  };

  const validate = () => {
    let result = true;
    if (userEmail === '' || userEmail === null) {
      result = false;
      toast.warning('Please enter username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter password');
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={proceedLoginUsingAPI} className="container">
          <div className="card">
            <div className="card-header">
              <h2> Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>User Name <span className="errmsg">*</span></label>
                <input
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>User Type <span className="errmsg">*</span></label>
                  <select value={role}  onChange={(e) => setrole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Patient">Patient</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Login</button>
              <Link className="btn btn-success" to="/register">New User</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
