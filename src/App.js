import "./App.css";
import BasicTable from "./BasicTable";
import SortTable from "./SortTable";
import FitleringTable from "./FitleringTable";
import PaginationTable from "./PaginationTable";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <h2>Learn React table</h2>
      </div>
      <PaginationTable />
    </div>
  );
}

export default App;
