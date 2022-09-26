import React from "react";
import { Link } from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSelector } from "react-redux";

const List = () => {
  const employees = useSelector(state => state.employees);
  
  const data = [...employees];

  const columnHelper = createColumnHelper()
  const columns = [
    columnHelper.accessor((row) => row.firstName, {
      id: "firstName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>First Name</span>,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor((row) => row.city, {
      id: "startDate",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Start Date</span>,
    }),
    columnHelper.accessor((row) => row.department, {
      id: "department",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Department</span>,
    }),
    columnHelper.accessor((row) => row.birthdate, {
      id: "dateOfBirth",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Date of Birth</span>,
    }),
    columnHelper.accessor((row) => row.street, {
      id: "street",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Street</span>,
    }),
    columnHelper.accessor((row) => row.city, {
      id: "city",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>City</span>,
    }),
    columnHelper.accessor((row) => row.state, {
      id: "state",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>State</span>,
    }),
    columnHelper.accessor((row) => row.zipCode, {
      id: "zipCode",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Zip Code</span>,
    }),
  ];




  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div id="employee-div" className="container">
      <h3>Current Employees</h3>
      <table data-testid="list-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <Link to={"/new"} data-testid="form-link">
        New
      </Link>
    </div>
  );
};

export default List;
