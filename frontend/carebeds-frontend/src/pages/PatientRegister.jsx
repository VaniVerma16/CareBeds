import React, { useState } from "react";
import { registerPatient } from "../services/api";

const PatientRegister = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    address: "",
    role: "",
    email: "",
    phoneNumber: "",
    password: "",
    age: "",
  });

  const handleInputChange = (e) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerPatient(patientData);
      alert("Patient registered successfully");
    } catch (err) {
      alert("Error registering patient");
    }
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={patientData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="address"
          value={patientData.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="role"
          value={patientData.role}
          onChange={handleInputChange}
          placeholder="Role"
        />
        <input
          type="email"
          name="email"
          value={patientData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phoneNumber"
          value={patientData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="password"
          name="password"
          value={patientData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <input
          type="number"
          name="age"
          value={patientData.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegister;
