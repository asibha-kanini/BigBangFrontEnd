import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.css';

export default function Register() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('india');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('female');
  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = 'Please enter a value in:';
    if (id === null || id === '') {
      isProceed = false;
      errorMessage += ' Username';
    }
    if (name === null || name === '') {
      isProceed = false;
      errorMessage += ' Fullname';
    }
    if (password === null || password === '') {
      isProceed = false;
      errorMessage += ' Password';
    }
    if (email === null || email === '') {
      isProceed = false;
      errorMessage += ' Email';
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        isProceed = false;
        toast.warning('Please enter a valid email');
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regObj = { id, name, password, email, phone, country, address, gender };
    if (isValidate()) {
      fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regObj)
      })
        .then((res) => {
          toast.success('Registered successfully.');
          navigate('/login');
        })
        .catch((err) => {
          toast.error('Failed: ' + err.message);
        });
    }
  };

  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h1>User Registration</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>User Name <span className="errmsg">*</span></label>
              <input value={id} onChange={(e) => setId(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Full Name <span className="errmsg">*</span></label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Password <span className="errmsg">*</span></label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email <span className="errmsg">*</span></label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Country <span className="errmsg">*</span></label>
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="form-control">
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="singapore">Singapore</option>
              </select>
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <br />
              <input type="radio" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} name="gender" value="male" className="app-check" />
              <label>Male</label>
              <input type="radio" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} name="gender" value="female" className="app-check" />
              <label>Female</label>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">Register</button> |
            <Link to="/login" className="btn btn-danger">Close</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
