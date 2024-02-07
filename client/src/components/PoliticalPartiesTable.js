import React from "react";
import Table from "./Table";
import "../styles/index.css";

const PoliticalPartiesTable = () => {
  const columns = [
    { Header: "Sr no.", accessor: "srNo" },
    { Header: "Party Name", accessor: "partyName" },
    { Header: "Party Abbreviation", accessor: "partyAbbreviation" },
    { Header: "Party Symbol", accessor: "partySymbol" },
  ];
  const data = Array.from({ length: 20 }, (_, index) => ({
    srNo: index + 1,
    partyName: `Party ${index + 1}`,
    partyAbbreviation: `AB${index}`,
    partySymbol: `Symbol ${index}`,
  }));

  return (
    <Table
      title="List of Political Parties Participated"
      columns={columns}
      data={data}
    />
  );
};

export default PoliticalPartiesTable;
