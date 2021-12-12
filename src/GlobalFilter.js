import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ value = "", setValue = () => {} }) => {
  const [filter, setFilter] = useState(value);
  const handleChange = useAsyncDebounce((value) => {
    setValue(value || undefined);
  }, 1000);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Search</p>
      <input
        value={filter}
        onChange={(e) => {
          setFilter(e?.target?.value);
          handleChange(e?.target?.value);
        }}
      />
    </div>
  );
};

export default GlobalFilter;
