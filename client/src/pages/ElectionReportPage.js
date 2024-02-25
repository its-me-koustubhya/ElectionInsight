import React from "react";
import indiaImage from "../assets/Indian_General_Election_2019.png";
import PoliticalPartiesTable from "../components/PoliticalPartiesTable";
import PartyWiseSeatsTable from "../components/PartyWiseSeatsTable";
import PerformanceNationalPartiesTable from "../components/PerformanceNationalPartiesTable";
import PerformanceStatePartiesTable from "../components/PerformanceStatePartiesTable";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import "../styles/index.css";

const ElectionReportPage = () => {
  return (
    <div className="election-report-page">
      <div className="election-report-container">
        <div className="election-report-header">
          <h2>General Election 2019 India Map</h2>
        </div>
        <div className="india-map-container">
          <img src={indiaImage} alt="India Map" className="india-map" />
        </div>
      </div>
      <div className="election-report-table-container">
        <PoliticalPartiesTable />
        <PartyWiseSeatsTable />
        <PerformanceNationalPartiesTable />
        <PerformanceStatePartiesTable />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ElectionReportPage;
