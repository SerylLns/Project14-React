import React from "react";
import { states } from "../utils";
import { useFormik } from "formik";
import { employeeSchema } from "../validations/EmployeeValidation";
// import { EmployeeContext } from "../context/EmployeeContext";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employeeSlice";

const EmployeeForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthdate: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
    validationSchema: employeeSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("Formik value:", formik.values);
      dispatch(addEmployee(formik.values));
      // addUser(formik.values);
    },
  });
  return (
    <form
      data-testid="employee-form"
      onSubmit={formik.handleSubmit}
      id="create-employee"
    >
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        id="first-name"
      />
      <small
        className={`error-form ${formik.errors?.firstName ? "active" : ""}`}
      >
        {formik.errors.firstName}
      </small>

      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        id="last-name"
      />
      <small
        className={`error-form ${formik.errors?.lastName ? "active" : ""}`}
      >
        {formik.errors.lastName}
      </small>

      <label htmlFor="date-of-birth">Date of Birth</label>
      <input
        id="date-of-birth"
        name="birthdate"
        value={formik.values.birthdate}
        onChange={formik.handleChange}
        type="date"
      />
      <small className="error-form">
        {<formik className="errors birthdate"></formik>}
      </small>

      <label htmlFor="start-date">Start Date</label>
      <input
        id="start-date"
        name="startDate"
        value={formik.values.startDate}
        onChange={formik.handleChange}
        type="date"
      />
      <small className="error-form">{formik.errors.startDate}</small>

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          value={formik.values.street}
          onChange={formik.handleChange}
          type="text"
        />
        <small className="error-form">{formik.errors.street}</small>

        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          type="text"
        />
        <small className="error-form">{formik.errors.city}</small>

        <label htmlFor="state">State</label>
        <select
          name="state"
          value={formik.values.state}
          onChange={formik.handleChange}
          id="state"
        >
          {states.map((state) => (
            <option key={state.abbreviation}>{state.name}</option>
          ))}
        </select>
        <small className="error-form">{formik.errors.state}</small>

        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          name="zipCode"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          type="number"
        />
        <small className="error-form">{formik.errors.zipCode}</small>
      </fieldset>

      <label htmlFor="department">Department</label>
      <select
        name="department"
        value={formik.values.department}
        onChange={formik.handleChange}
        id="department"
      >
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <button type="submit" disabled={!formik.isValid}>
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
