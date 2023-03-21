import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import "../app.css";
import { Link } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const New = () => {
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="form-container">
        <Link to={"/"}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <EmployeeForm />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default New;
