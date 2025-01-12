import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation

const MainPage = () => {
  const [hospitalId, setHospitalId] = useState("");
  const navigate = useNavigate();

  // Handle hospital ID form submission
  const handleHospitalSubmit = (e) => {
    e.preventDefault();
    if (hospitalId) {
      navigate(`/hospital/${hospitalId}/dashboard`); // Navigate to the hospital dashboard
    } else {
      alert("Please enter a valid Hospital ID.");
    }
  };

  return (
    <div>
      <div className="headercon">
        <img
          src="/logo-removebg-preview.png" // Image from public folder
          alt="Hospital Management System Logo"
          style={{ width: "200px", marginBottom: "20px" }}
        />
        <h1 className="heading">Welcome to CareBeds</h1>
      </div>

      <div className="patnav">
        <div>
          <Link to="/patients/login">
            <button>Patient Login</button>
          </Link>
        </div>
        <div>
          <Link to="/patients/register">
            <button>Patient Register</button>
          </Link>
        </div>
      </div>

      <div>
        <form onSubmit={handleHospitalSubmit}>
          <label htmlFor="hospitalId">Enter Hospital ID:</label>
          <input
            type="number"
            id="hospitalId"
            value={hospitalId}
            onChange={(e) => setHospitalId(e.target.value)}
            placeholder="Enter Hospital ID"
          />
          <button type="submit">Go to Hospital Dashboard</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
