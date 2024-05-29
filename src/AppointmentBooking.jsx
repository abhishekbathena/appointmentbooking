import React, { useState, useEffect, forwardRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import data from './data';

const AppointmentBooking = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [response, setResponse] = useState([]);

  // Load departments from data.js
  useEffect(() => {
    setDepartments(data.departments);
  }, []);

  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    setSelectedDepartment(departmentId);

    // Fetch doctors based on the selected department
    setDoctors(data.doctors[departmentId] || []);
    setSelectedDoctor('');
  };

  const handleDoctorChange = (e) => {
    const doctorId = e.target.value;
    setSelectedDoctor(doctorId);

    // Fetch available time slots for the selected doctor and date
    if (selectedDepartment && doctorId) {
      setTimeSlots(data.timeSlots[selectedDepartment][doctorId] || []);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      department: selectedDepartment,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
    };
    setResponse(appointmentData);
  };

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <div className="input-group">
      <Form.Control 
        type="text" 
        value={value} 
        onClick={onClick} 
        ref={ref} 
        readOnly
        placeholder="Select Date"
      />
      <div className="input-group-append">
        <Button variant="outline-secondary" onClick={onClick}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Button>
      </div>
    </div>
  ));

  const CustomSelectInput = forwardRef(({ value, onClick, placeholder, options }, ref) => (
    <div className="input-group">
      <Form.Control 
        as="select" 
        value={value} 
        onChange={onClick} 
        ref={ref}
        custom
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </Form.Control>
    </div>
  ));

  return (
    <Container>
      <h1 className="mt-5">Book an Appointment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <CustomSelectInput 
            value={selectedDepartment} 
            onClick={handleDepartmentChange} 
            placeholder="Select Department" 
            options={departments} 
          />
        </Form.Group>

        <Form.Group controlId="formDoctor">
          <Form.Label>Doctor</Form.Label>
          <CustomSelectInput 
            value={selectedDoctor} 
            onClick={handleDoctorChange} 
            placeholder="Select Doctor" 
            options={doctors} 
            disabled={!selectedDepartment}
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={<CustomDateInput />}
            dateFormat="MM/dd/yyyy"
          />
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control as="select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} disabled={!selectedDoctor || !selectedDate}>
            <option value="">Select Time</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'center' }}>
          <Button type="submit">Book Appointment</Button>
        </div>
      </Form>

      <h2 className="mt-5">Response</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </Container>
  );
};

export default AppointmentBooking;
