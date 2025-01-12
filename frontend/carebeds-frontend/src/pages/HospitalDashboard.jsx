import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to capture route params
import {
  getHospital,
  getBedsForHospital,
  getAllPatients,
} from "../services/api";

const HospitalDashboard = () => {
  const { hospitalId } = useParams(); // Extract hospitalId from the route parameter
  const [hospital, setHospital] = useState(null);
  const [beds, setBeds] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!hospitalId) {
          console.error("Hospital ID is not available");
          return;
        }

        // Fetch hospital data, beds, and patients by using the hospitalId
        const hospitalResponse = await getHospital(hospitalId);
        setHospital(hospitalResponse.data);

        const bedsResponse = await getBedsForHospital(hospitalId);
        setBeds(bedsResponse.data);

        const patientsResponse = await getAllPatients();
        setPatients(patientsResponse.data);
      } catch (err) {
        console.error("Error fetching data", err); // Error logging
      }
    };

    fetchData();
  }, [hospitalId]); // Re-run effect when hospitalId changes

  return (
    <div>
      {hospital ? (
        <>
          <h2>{hospital.name} Dashboard</h2>
          <p>Address: {hospital.address}</p>
          <h3>Available Beds: {beds.length}</h3>
          <h4>Patients:</h4>
          <ul>
            {patients.map((patient) => (
              <li key={patient.id}>{patient.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading hospital data...</p>
      )}
    </div>
  );
};

export default HospitalDashboard;
