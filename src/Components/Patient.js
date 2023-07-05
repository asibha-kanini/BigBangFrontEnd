import React, { Component } from 'react';
import { variable } from './Variable';
import './Patients.css';
import { Link } from 'react-router-dom';

export class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patient: [],
      newPatient: {
        patientName: '',
        patientAge: '',
        patientGender: '',
        patientDescription: '',
        patientEmail: '',
        patientImg: '',
      },
    };

    // Bind the postPatient method to the component's instance
    this.postPatient = this.postPatient.bind(this);
  }

  componentDidMount() {
    this.fetchPatient();
  }

  fetchPatient() {
    fetch(variable.API_URL2 + 'Patients')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Patient: data });
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching patients:', error);
      });
  }

  postPatient() {
    const { newPatient } = this.state;

    fetch(variable.API_URL2 + 'Patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPatient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Patient created:', data);

        // Add the new patient to the state
        this.setState((prevState) => ({
          Patient: [...prevState.Patient, data],
          newPatient: {
            patientName: '',
            patientAge: '',
            patientGender: '',
            patientDescription: '',
            patientEmail: '',
            patientImg: '',
          },
        }));
      })
      .catch((error) => {
        console.error('Error creating patient:', error);
      });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newPatient: {
        ...prevState.newPatient,
        [name]: value,
      },
    }));
  }

  render() {
    const { Patient, newPatient } = this.state;

    return (
      <div>
      <h1>GET</h1>
      <div className="card-container">
        {Patient.map((item) => (
          <div key={item.patientId} className="card">
            <div className="card-header">
              <h3>PatientsName:{item.patientName}</h3>
              
            </div>
            <div className="card-body">
              <img src={item.patientImg} alt="image" className="card-image" />
              <div className="patient-info">
              <p>Email:{item.patientEmail}</p>
                <p>Patient ID: {item.patientId}</p>
                <p>Age: {item.patientAge}</p>
                <p>Gender: {item.patientGender}</p>
                <p>Description: {item.patientDescription}</p>
              </div>
            </div>
            <Link
                  to="/appointments"
                  className="btn book-appointment-btn"
                >
                  Book the appointment
                </Link>
          </div>
        ))}
      </div>
  
    

   
      <div className="post-section">
  <div className="card">
    <div className="card-header">
      <h3>Create Patient</h3>
    </div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="patientName"
            value={newPatient.patientName}
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="patientAge"
            value={newPatient.patientAge}
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Age"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input
            type="text"
            name="patientGender"
            value={newPatient.patientGender}
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Gender"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="patientDescription"
            value={newPatient.patientDescription}
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Description"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="patientEmail"
            value={newPatient.patientEmail}
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Email"
            className="form-input"
          />
        </div>
        <button onClick={() => this.postPatient()} className='btnn'>
          Create Patient
        </button>
      </form>
    </div>
  </div>
</div>
</div>
);}}
export default Patient;
