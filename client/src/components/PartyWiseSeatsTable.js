import React from "react";
import Table from "./Table";
import "../styles/index.css";

const PartyWiseSeatsTable = () => {
  const columns = [
    { Header: "State Name", accessor: "stateName" },
    { Header: "Total Valid Votes Polled", accessor: "totalValidVotes" },
    { Header: "Total Electors", accessor: "totalElectors" },
    { Header: "Seats Won", accessor: "seatsWon" },
  ];
  const data = Array.from({ length: 20 }, (_, index) => ({
    stateName: `State ${index + 1}`,
    totalValidVotes: Math.floor(Math.random() * 100000),
    totalElectors: Math.floor(Math.random() * 500000),
    seatsWon: Math.floor(Math.random() * 20),
  }));

  return (
    <Table
      title="Party Wise Seat Won and Valid Votes Polled in Each State"
      columns={columns}
      data={data}
    />
  );
};

export default PartyWiseSeatsTable;
