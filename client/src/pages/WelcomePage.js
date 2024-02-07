// client/src/components/pages/WelcomePage.js
import React, { useState, useEffect } from "react";
import "../styles/index.css";

const WelcomePage = () => {
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    // Handle the selected year
    if (selectedYear === "2019") {
      // Redirect to the second page or perform other actions
      window.location.href = "/home";
    }
  }, [selectedYear]);

  useEffect(() => {
    // Apply styles to disable scrolling when the component mounts
    document.body.style.overflow = "hidden";

    // Clean up the styles when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="welcome-page">
      <div className="overlay"></div>
      <div className="welcome-content">
        <h1>Welcome to Election Insight</h1>
        <p>
          "Our platform ensures a user-friendly experience, making the electoral
          process accessible and insightful for everyone. Select the year to see
          the election report."
        </p>
        <div className="select-year">
          <label htmlFor="year">Select the year </label>
          <select
            id="year"
            name="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">-- Select Year --</option>
            <option value="2009">2009</option>
            <option value="2014">2014</option>
            <option value="2019">2019</option>
            {/* Add more years as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
