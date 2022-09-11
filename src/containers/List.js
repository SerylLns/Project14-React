import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div id="employee-div" class="container">
      <h3>Current Employees</h3>
      <table id="employee-table" class="display"></table>
      <Link to={'/new'}>New</Link>
    </div>
  );
};

export default List;
