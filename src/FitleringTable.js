import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import column, { columnsGroup } from "./columns";
import "./table.css";
import GlobalFilter from "./GlobalFilter";

const FilteringTable = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useFilters, useGlobalFilter);

  const { globalFilter } = state;
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <GlobalFilter value={globalFilter} setValue={setGlobalFilter} />
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column, index) => (
                <th key={index} {...column?.getHeaderProps()}>
                  {column?.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.map((row, index) => {
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
        <tfoot>
          {footerGroups?.map((footerGroup, index) => (
            <tr key={index} {...footerGroup?.getFooterGroupProps()}>
              {footerGroup?.headers?.map((column, index) => (
                <td key={index} {...column?.getFooterProps()}>
                  {column?.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default FilteringTable;
