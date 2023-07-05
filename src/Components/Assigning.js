// import React, { Component } from 'react';
// import './Appointments.css';
// import Appointments from './Appointments';

// export class Assigning extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       appointments: [], // Store booked appointments
//     };
//   }

//   handleAppointmentBooking = (appointment) => {
//     // Perform API call or data manipulation to make the booking
//     // Example: this.props.bookAppointment(appointment);
//     // You can pass the appointment details to a parent component to handle the booking functionality

//     // Store the booked appointment in the state
//     this.setState((prevState) => ({
//       appointments: [...prevState.appointments, appointment],
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Assigning</h1>
//         <Appointments bookAppointment={this.handleAppointmentBooking} />
//         {/* Render other components or content */}
//       </div>
//     );
//   }
// }

// export default Assigning;
