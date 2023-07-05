import React, { Component } from 'react';
import { variable } from './Variable';
import './Doctor.css';

export class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Doctor: [],
      newDoctor: {
        docId: '',
        docName: '',
        docSpecialty: '',
        docEmail: '',
        docpas: '',
        docActive: false,
        docImg: ''
      },
      selectedDoctor: null
    };
  }

  componentDidMount() {
    this.fetchDoctor();
  }

  fetchDoctor() {
    fetch(variable.API_URL + 'Doctors')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Doctor: data });
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }

  updateDoctorName = (id, newName) => {
    const updatedDoctors = this.state.Doctor.map((doctor) => {
      if (doctor.docId === id) {
        return { ...doctor, docName: newName };
      }
      return doctor;
    });

    this.setState({ Doctor: updatedDoctors });

    fetch(variable.API_URL + 'Doctors/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ docName: newName })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Doctor updated:', data);
        alert('Doctor updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating doctor:', error);
        alert('Error updating doctor. Please try again.');
      });
  };

  addDoctor = (event) => {
    event.preventDefault();

    const { newDoctor } = this.state;

    fetch(variable.API_URL + 'Doctors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDoctor)
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          Doctor: [...prevState.Doctor, data]
        }));
        console.log('Doctor added:', data);
        alert('Doctor added successfully!');
      })
      .catch((error) => {
        console.error('Error adding doctor:', error);
        alert('Error adding doctor. Please try again.');
      });

    event.target.reset();
  };


  deleteDoctor = (id) => {
    const updatedDoctors = this.state.Doctor.filter(
      (doctor) => doctor.docId !== id
    );

    this.setState({ Doctor: updatedDoctors });

    fetch(variable.API_URL + 'Doctors/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        console.log('Doctor deleted:', id);
        alert('Doctor deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting doctor:', error);
        alert('Error deleting doctor. Please try again.');
      });
  };


  editDoctor = (id) => {
    const selectedDoctor = this.state.Doctor.find((doctor) => doctor.docId === id);
    this.setState({ selectedDoctor });
  };

  render() {
    const { Doctor, newDoctor, selectedDoctor } = this.state;

    return (
      <div>
        <div className="container">
  {Doctor.map((item) => (
    <div key={item.docId} className="card">
      <img src={item.docImg} alt="image" className="card-image" />
      <div className="card-content">
        <h3> DoctorName:{item.docName}</h3>
        <p>Specialty: {item.docSpecialty}</p>
        <p>Email: {item.docEmail}</p>
        {selectedDoctor && selectedDoctor.docId === item.docId ? (
          <input
            type="text"
            value={selectedDoctor.docName}
            onChange={(event) =>
              this.updateDoctorName(item.docId, event.target.value)
            }
          />
        ) : (
          <p>Doctor ID: {item.docId}</p>
        )}
      </div>
      <div className="card-actions">
        {selectedDoctor && selectedDoctor.docId === item.docId ? (
          <button onClick={() => this.editDoctor(null)}className='button'>Save</button>
        ) : (
          <button onClick={() => this.editDoctor(item.docId)} className='button'>Edit</button>
        )}
        <button onClick={() => this.deleteDoctor(item.docId)} className='botton1' >Delete</button>
      </div>
    </div>
  ))}
</div>

<h1 className="post">Admin </h1>
<div className="card">
  <form onSubmit={this.addDoctor} className="container">
    <input
      type="text"
      name="docName"
      value={newDoctor.docName}
      onChange={this.handleInputChange}
      placeholder="Doctor Name"
      required
    /><br></br>
    <input
      type="text"
      name="docSpecialty"
      value={newDoctor.docSpecialty}
      onChange={this.handleInputChange}
      placeholder="Specialty"
      required
    /><br></br>
    <input
      type="email"
      name="docEmail"
      value={newDoctor.docEmail}
      onChange={this.handleInputChange}
      placeholder="Email"
      required
    /><br></br>
    <button type="submit" className='add'>Add Doctor</button>
  </form>
</div>

      </div>
    );
  }
}
export default Doctor