import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';


export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      let inputObj = {
        adminEmail: userEmail,
        adminPassword: password
      };
    

      fetch("https://localhost:7171/api/Login/Admin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputObj)
      })
        .then((res) => res.text())
        .then((resp) => {
            console.log(resp)
            console.log(inputObj)
          localStorage.setItem('token', 234);
          localStorage.setItem('userEmail', userEmail);
          toast.success('Login Successful');
          navigate('/Admin');
        })
        .catch((err) => {
          toast.error('Login Failed: ' + err.message);
        });
//     axios.post('https://localhost:7171/api/Login/Admin', inputObj)
//   .then(response => {
//     console.log(response.data);
//     console.log(inputObj)
//   })
//   .catch(error => {
//     console.log(inputObj)
//     console.error(error);
//   });
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
              <h2>User Login</h2>
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
                  <select>
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
