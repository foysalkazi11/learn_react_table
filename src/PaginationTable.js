import React, { useMemo, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import column, { columnsGroup } from "./columns";
import "./table.css";
const PaginationTable = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable({ columns, data }, usePagination);
  const { pageIndex, pageSize } = state;

  useEffect(() => {
    setPageSize(5);
  }, []);
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column, index) => (
                <th key={index} {...column?.getHeaderProps()}>
                  {column?.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row?.getRowProps()}>
                {row?.cells?.map((cell, index) => (
                  <td key={index} {...cell?.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <div>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions?.length}
          </strong>
        </div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Pre
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        {/* <select
          value={pageSize}
          onChange={(e) => setPageSize(e?.target?.value)}
        >
          {[5, 10, 15]?.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
};

export default PaginationTable;
