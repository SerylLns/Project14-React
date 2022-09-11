import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div id="employee-div" className="container">
      <h3>Current Employees</h3>
      <table id="employee-table" className="display"></table>
      <Link to={"/new"} data-testid="form-link">
        New
      </Link>
    </div>
  );
};

export default List;
