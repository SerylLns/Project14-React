import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataGrid} from "@mui/x-data-grid";

const List = () => {
  const employees = useSelector((state) => state.employees);

  const columns = [
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "startDate", headerName: "Start date", width: 130 },
    { field: "department", headerName: "Department", width: 130 },
    { field: "birthdate", headerName: "Date of Birth", width: 130 },
    { field: "street", headerName: "Street", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "state", headerName: "State", width: 130 },
    { field: "zipCode", headerName: "Zip Code", width: 130 },
  ];

  const rows = [...employees];

  return (
    <div id="employee-div" className="container">
      <h3>Current Employees</h3>
      <DataGrid
        getRowId={(row) => row.lastName}
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
      />
      <Link to={"/new"} data-testid="form-link">
        New
      </Link>
    </div>
  );
};

export default List;
