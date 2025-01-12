import React from "react";
import ReactDOM from "react-dom/client"; // Vite uses the new root API
import App from "./App";
import "./style.css"; // Import the CSS file for styling

// This is where we render the root component of the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
