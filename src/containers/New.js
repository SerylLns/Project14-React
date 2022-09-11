import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import "../app.css";
import { Link } from 'react-router-dom';


const New = () => {
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={"/"}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeeForm />
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
};

export default New;