import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientRegister from "./pages/PatientRegister";
import PatientLogin from "./pages/PatientLogin";
import PatientDashboard from "./pages/PatientDashboard"; // Import PatientDashboard
import HospitalDashboard from "./pages/HospitalDashboard";
import MainPage from "./pages/MainPage"; // Import MainPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main Page Route */}
        <Route path="/patients/register" element={<PatientRegister />} />
        <Route path="/patients/login" element={<PatientLogin />} />
        <Route path="/patients/dashboard" element={<PatientDashboard />} />{" "}
        {/* Patient Dashboard Route */}
        <Route
          path="/hospital/:hospitalId/dashboard"
          element={<HospitalDashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
