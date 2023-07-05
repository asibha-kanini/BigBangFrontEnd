// // import React, { Component } from 'react'

// // export class Appointments extends Component {
  
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       patientId: '',
// //       patientName:'',
// //       patientDescription:'',
// //       doctorId: '',
// //       docSpecialty: '',
// //       bookingDate: '',
// //       bookingTime: '',
// //       errorMessage: ''
// //     };
// //   }

// //   handleInputChange = (event) => {
// //     this.setState({
// //       [event.target.name]: event.target.value
// //     });
// //   };

// //   handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Perform booking logic here using the captured form data
// //     const { patientId, doctorId, bookingDate, bookingTime } = this.state;
// //     // Perform API call or data manipulation to make the booking
// //     // Example: this.props.bookAppointment(patientId, doctorId, bookingDate, bookingTime);
// //     // You can pass the booking details to a parent component to handle the booking functionality

// //     // Clear the form fields after submission
// //     this.setState({
// //         patientId: '',
// //         patientName:'',
// //         patientDescription:'',
// //         doctorId: '',
// //         docSpecialty: '',
// //         bookingDate: '',
// //         bookingTime: '',
// //         errorMessage: ''
// //     });
// //   };

// //   render() {
// //     return (
// //       <div>
// //        <div>
// //   <h1>Assigning</h1>
// //   <form onSubmit={this.handleSubmit}>
// //     <div>
// //       <label htmlFor="patientId">Patient ID:</label>
// //       <input
// //         type="text"
// //         id="patientId"
// //         name="patientId"
// //         value={this.state.patientId}
// //         onChange={this.handleInputChange}
// //         required
// //       />
// //     </div>
// //     <div>
// //       <label htmlFor="doctorId">Doctor ID:</label>
// //       <input
// //         type="text"
// //         id="doctorId"
// //         name="doctorId"
// //         value={this.state.doctorId}
// //         onChange={this.handleInputChange}
// //         required
// //       />
// //     </div>
// //     <div>
// //       <label htmlFor="bookingDate">Booking Date:</label>
// //       <input
// //         type="date"
// //         id="bookingDate"
// //         name="bookingDate"
// //         value={this.state.bookingDate}
// //         onChange={this.handleInputChange}
// //         required
// //       />
// //     </div>
// //     <div>
// //       <label htmlFor="bookingTime">Booking Time:</label>
// //       <input
// //         type="time"
// //         id="bookingTime"
// //         name="bookingTime"
// //         value={this.state.bookingTime}
// //         onChange={this.handleInputChange}
// //         required
// //       />
// //     </div>
// //     <button type="submit">Book Appointment</button>
// //   </form>
// //   {this.state.errorMessage && <p className="errmsg">{this.state.errorMessage}</p>}
// // </div>
// // </div>
// //     );
// //   }
// // }











// // export default Appointments
// import React, { Component } from 'react';
// import './Appointments.css';

// export class Appointments extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       patientId: '',
//       patientName: '',
//       patientDescription: '',
//       doctorId: '',
//       docSpecialty: '',
//       bookingDate: '',
//       bookingTime: '',
//       errorMessage: '',
//       successMessage: '',
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//       errorMessage: '',
//       successMessage: '',
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform validation or other logic here
//     if (!this.state.patientId || !this.state.patientName) {
//       this.setState({
//         errorMessage: 'Please enter patient ID and name.',
//         successMessage: '',
//       });
//     } else {
//       // Perform booking logic here using the captured form data
//       const { patientId, patientName, patientDescription, doctorId, docSpecialty, bookingDate, bookingTime } = this.state;
//       // Perform API call or data manipulation to make the booking
//       // Example: this.props.bookAppointment(patientId, doctorId, bookingDate, bookingTime);
//       // You can pass the booking details to a parent component to handle the booking functionality

//       // Clear the form fields after submission and display success message
//       this.setState({
//         patientId: '',
//         patientName: '',
//         patientDescription: '',
//         doctorId: '',
//         docSpecialty: '',
//         bookingDate: '',
//         bookingTime: '',
//         errorMessage: '',
//         successMessage: 'Appointment booked successfully!',
//       });
      
     
//     };
    
//   };

//   render() {
//     return (
//       <div>
//         <h1>Assigning</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="patientId">Patient ID:</label>
//             <input
//               type="text"
//               id="patientId"
//               name="patientId"
//               value={this.state.patientId}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="patientName">Patient Name:</label>
//             <input
//               type="text"
//               id="patientName"
//               name="patientName"
//               value={this.state.patientName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="patientDescription">Patient Description:</label>
//             <textarea
//               id="patientDescription"
//               name="patientDescription"
//               value={this.state.patientDescription}
//               onChange={this.handleInputChange}
//               required
//             ></textarea>
//           </div>
//           <div>
//             <label htmlFor="doctorId">Doctor ID:</label>
//             <input
//               type="text"
//               id="doctorId"
//               name="doctorId"
//               value={this.state.doctorId}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="docSpecialty">Doctor Specialty:</label>
//             <input
//               type="text"
//               id="docSpecialty"
//               name="docSpecialty"
//               value={this.state.docSpecialty}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="bookingDate">Booking Date:</label>
//             <input
//               type="date"
//               id="bookingDate"
//               name="bookingDate"
//               value={this.state.bookingDate}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="bookingTime">Booking Time:</label>
//             <input
//               type="time"
//               id="bookingTime"
//               name="bookingTime"
//               value={this.state.bookingTime}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit">Book Appointment</button>
//         </form>
//         {this.state.errorMessage && <p className="errmsg">{this.state.errorMessage}</p>}
//         {this.state.successMessage && <p className="successmsg">{this.state.successMessage}</p>}
//       </div>
//     );
//   }
// }

// export default Appointments;
import React, { Component } from 'react';
import './Appointments.css';

export class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: '',
      patientName: '',
      patientDescription: '',
      doctorId: '',
      docSpecialty: '',
      bookingDate: '',
      bookingTime: '',
      errorMessage: '',
      successMessage: '',
      appointments: [], // Store booked appointments
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: '',
      successMessage: '',
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation or other logic here
    if (!this.state.patientId || !this.state.patientName) {
      this.setState({
        errorMessage: 'Please enter patient ID and name.',
        successMessage: '',
      });
    } else {
      // Perform booking logic here using the captured form data
      const {
        patientId,
        patientName,
        patientDescription,
        doctorId,
        docSpecialty,
        bookingDate,
        bookingTime,
      } = this.state;
      // Perform API call or data manipulation to make the booking
      // Example: this.props.bookAppointment(patientId, doctorId, bookingDate, bookingTime);
      // You can pass the booking details to a parent component to handle the booking functionality

      // Store the booked appointment in the state
      const appointment = {
        patientId,
        patientName,
        patientDescription,
        doctorId,
        docSpecialty,
        bookingDate,
        bookingTime,
      };
      this.setState((prevState) => ({
        appointments: [...prevState.appointments, appointment],
        patientId: '',
        patientName: '',
        patientDescription: '',
        doctorId: '',
        docSpecialty: '',
        bookingDate: '',
        bookingTime: '',
        errorMessage: '',
        successMessage: 'Appointment booked successfully!',
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Assigning</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="patientId">Patient ID:</label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={this.state.patientId}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={this.state.patientName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="patientDescription">Patient Description:</label>
            <textarea
              id="patientDescription"
              name="patientDescription"
              value={this.state.patientDescription}
              onChange={this.handleInputChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="doctorId">Doctor ID:</label>
            <input
              type="text"
              id="doctorId"
              name="doctorId"
              value={this.state.doctorId}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="docSpecialty">Doctor Specialty:</label>
            <input
              type="text"
              id="docSpecialty"
              name="docSpecialty"
              value={this.state.docSpecialty}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="bookingDate">Booking Date:</label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={this.state.bookingDate}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="bookingTime">Booking Time:</label>
            <input
              type="time"
              id="bookingTime"
              name="bookingTime"
              value={this.state.bookingTime}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Book Appointment</button>
        </form>
        {this.state.errorMessage && <p className="errmsg">{this.state.errorMessage}</p>}
        {this.state.successMessage && <p className="successmsg">{this.state.successMessage}</p>}

        {/* Render booked appointments */}
        {this.state.appointments.length > 0 && (
          <div>
            <h2>Booked Appointments</h2>
            <div className="appointment-cards">
              {this.state.appointments.map((appointment, index) => (
                <div key={index} className="appointment-card">
                  <h3>Appointment {index + 1}</h3>
                  <div>
                    <strong>Patient ID:</strong> {appointment.patientId}
                  </div>
                  <div>
                    <strong>Patient Name:</strong> {appointment.patientName}
                  </div>
                  <div>
                    <strong>Patient Description:</strong> {appointment.patientDescription}
                  </div>
                  <div>
                    <strong>Doctor ID:</strong> {appointment.doctorId}
                  </div>
                  <div>
                    <strong>Doctor Specialty:</strong> {appointment.docSpecialty}
                  </div>
                  <div>
                    <strong>Booking Date:</strong> {appointment.bookingDate}
                  </div>
                  <div>
                    <strong>Booking Time:</strong> {appointment.bookingTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Appointments;