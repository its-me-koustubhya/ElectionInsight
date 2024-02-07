import React from "react";
import Table from "./Table";
import "../styles/index.css";

const PerformanceNationalPartiesTable = () => {
  const columns = [
    { Header: "Party Name", accessor: "partyName" },
    { Header: "Contested", accessor: "contested" },
    { Header: "Won", accessor: "won" },
    { Header: "DF", accessor: "df" },
    { Header: "Votes Secured", accessor: "votesSecured" },
    { Header: "Over Total Electors", accessor: "overTotalElectors" },
    {
      Header: "Over Total Valid Votes Polled",
      accessor: "overTotalValidVotes",
    },
  ];
  const data = Array.from({ length: 20 }, (_, index) => ({
    partyName: `Party ${index + 1}`,
    contested: Math.floor(Math.random() * 50),
    won: Math.floor(Math.random() * 20),
    df: Math.floor(Math.random() * 10),
    votesSecured: Math.floor(Math.random() * 100000),
    overTotalElectors: Math.random().toFixed(2),
    overTotalValidVotes: Math.random().toFixed(2),
  }));

  return (
    <Table
      title="Performance of National Parties"
      columns={columns}
      data={data}
    />
  );
};

export default PerformanceNationalPartiesTable;
