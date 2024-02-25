// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ElectionReportPage from "./pages/ElectionReportPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/ElectionInsight" element={<HomePage />} />
          <Route path="/ElectionReport" element={<ElectionReportPage />} />
          {/* Add more routes for other pages */}
        </Routes>
        {/* Include Footer here if you want it on all pages */}
      </div>
    </Router>
  );
};

export default App;
