import React from "react";
import Table from "./Table";
import "../styles/index.css";

const PerformanceStatePartiesTable = () => {
  const columns = [
    { Header: "Party Name", accessor: "partyName" },
    { Header: "State Name", accessor: "stateName" },
    { Header: "Contested", accessor: "contested" },
    { Header: "Won", accessor: "won" },
    { Header: "DF", accessor: "df" },
  ];
  const data = Array.from({ length: 20 }, (_, index) => ({
    partyName: `Party ${index + 1}`,
    stateName: `State ${index + 1}`,
    contested: Math.floor(Math.random() * 50),
    won: Math.floor(Math.random() * 20),
    df: Math.floor(Math.random() * 10),
  }));

  return (
    <Table title="Performance of State Parties" columns={columns} data={data} />
  );
};

export default PerformanceStatePartiesTable;
