import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Search</p>
      <input
        value={filterValue}
        onChange={(e) => setFilter(e?.target?.value)}
      />
    </div>
  );
};

export default ColumnFilter;
