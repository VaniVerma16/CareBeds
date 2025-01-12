import axios from "axios";

// Set up base URL for API
const BASE_URL = "http://localhost:8080"; // Change to your backend URL if needed

// Patient API calls
export const getAllPatients = () => axios.get(`${BASE_URL}/patients`);
export const registerPatient = (data) =>
  axios.post(`${BASE_URL}/patients/register`, data);
export const loginPatient = (data) =>
  axios.post(`${BASE_URL}/patients/login`, data);
export const getPatient = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/patients/${id}`); // API call to fetch patient data by ID
    return response; // Return the patient data
  } catch (err) {
    console.error("Error fetching patient data", err);
    throw err; // Handle error
  }
};

export const assignBedToPatient = (patientId, bedId) =>
  axios.post(`${BASE_URL}/patients/${patientId}/bed`, { bedId });
export const getHospitalForPatient = (patientId) =>
  axios.get(`${BASE_URL}/patients/${patientId}/hospital`);

// Hospital API calls
export const loginHospital = (data) =>
  axios.post(`${BASE_URL}/hospital/login`, data);
export const registerHospital = (data) =>
  axios.post(`${BASE_URL}/hospital/register`, data);
export const getHospital = (id) => axios.get(`${BASE_URL}/hospital/${id}`);
export const addPatientToHospital = (hospitalId, patientId) =>
  axios.post(`${BASE_URL}/hospital/${hospitalId}/addpatient/${patientId}`);
export const getBedsForHospital = (hospitalId) =>
  axios.get(`${BASE_URL}/hospital/${hospitalId}/beds`);
