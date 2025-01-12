import React, { useState } from "react";
import { loginPatient } from "../services/api";
import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect

const PatientLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginPatient(loginData);
      const { userId, role } = response.data; // Get patient ID and role from response
      localStorage.setItem("patientId", userId); // Store patient ID
      localStorage.setItem("role", role); // Store role (if needed)
      alert("Login successful");
      navigate("/patients/dashboard"); // Redirect to Patient Dashboard
    } catch (err) {
      alert("Error logging in");
    }
  };

  return (
    <div>
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default PatientLogin;
