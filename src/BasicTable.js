import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import column, { columnsGroup } from "./columns";
import "./table.css";
const BasicTable = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data });
  return (
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
  );
};

export default BasicTable;
