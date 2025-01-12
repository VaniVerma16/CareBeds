import React, { useState, useEffect } from "react";
import { getPatient } from "../services/api"; // API function to fetch patient data

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientData = async () => {
      const patientId = localStorage.getItem("patientId"); // Get patient ID from localStorage

      if (patientId) {
        try {
          const response = await getPatient(patientId); // Fetch patient data
          setPatient(response.data); // Set patient data in state
          setLoading(false);
        } catch (error) {
          console.error("Error fetching patient data:", error);
          setLoading(false);
        }
      } else {
        alert("Please log in to view your dashboard.");
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return <p>Loading patient information...</p>;
  }

  return (
    <div>
      {patient ? (
        <div>
          <h2>Welcome, {patient.name}</h2>
          <p>Age: {patient.age}</p>
          <p>Email: {patient.email}</p>
          <p>Phone Number: {patient.phoneNumber}</p>
          <p>Address: {patient.address}</p>
          <p>Gender: {patient.gender}</p>
          <p>Blood Type: {patient.bloodType}</p>
          <p>Medical Condition: {patient.medicalCondition}</p>
          <p>Admission Type: {patient.admissionType}</p>
          <p>Medications: {patient.medications}</p>
          <p>Test Results: {patient.testResults}</p>
        </div>
      ) : (
        <p>No patient data available</p>
      )}
    </div>
  );
};

export default PatientDashboard;
