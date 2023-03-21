import React from "react";
import { states } from "../utils";
import { useFormik } from "formik";
import { employeeSchema } from "../validations/EmployeeValidation";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employeeSlice";
import { Input, Select, MenuItem, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Modal from "open-modale/dist/Modal";
import { useNavigate } from "react-router-dom";

const departmentOptions = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human",
  "Resources",
  "Legal",
];

const EmployeeForm = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthdate: null,
      startDate: null,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
    validationSchema: employeeSchema,
    onSubmit: (values) => {
      setOpen(true);
      console.log(open)
      dispatch(addEmployee(formik.values));
    },
  });

  const handleCloseModal = () => {
    navigate("/")
  }
  return (
    <>
      <button onClick={() => setOpen(true)}>dksdks</button>
      <form
        data-testid="employee-form"
        onSubmit={formik.handleSubmit}
        id="create-employee"
      >
        <label htmlFor="first-name">First Name</label>
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          id="first-name"
        />
        <small
          data-testid="firstNameError"
          className={`error-form ${formik.errors?.firstName ? "active" : ""}`}
        >
          {formik.errors.firstName}
        </small>

        <label htmlFor="last-name">Last Name</label>
        <Input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          id="last-name"
        />
        <small
          data-testid="lastNameError"
          className={`error-form ${formik.errors?.lastName ? "active" : ""}`}
        >
          {formik.errors.lastName}
        </small>

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          id="date-of-birth"
          name="birthdate"
          value={formik.values.birthdate}
          onChange={(value) => {
            formik.setFieldValue("birthdate", value);
          }}
          type="date"
        />
        <small
          className={`error-form ${formik.errors?.birthdate ? "active" : ""}`}
        >
          {formik.errors.birthdate}
        </small>

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          placeholder="Start date"
          id="start-date"
          name="startDate"
          value={formik.values.startDate}
          onChange={(value) => {
            formik.setFieldValue("startDate", value);
          }}
          type="date"
        />
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <Input
            placeholder="Street"
            id="street"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
            type="text"
          />
          <small data-testid="streetError" className="error-form">
            {formik.errors.street}
          </small>
          <label htmlFor="city">City</label>
          <Input
            placeholder="City"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            type="text"
          />
          <small className="error-form">{formik.errors.city}</small>
          <label htmlFor="state">State</label>
          <Select
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            id="state"
          >
            {states.map((state) => (
              <MenuItem value={state.name} key={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
          <small className="error-form">{formik.errors.state}</small>
          <label htmlFor="zip-code">Zip Code</label>
          <Input
            placeholder="Zip Code"
            id="zip-code"
            name="zipCode"
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            type="number"
          />
          <small className="error-form">{formik.errors.zipCode}</small>
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          name="department"
          value={formik.values.department}
          onChange={formik.handleChange}
          id="department"
        >
          {departmentOptions.map((opt) => (
            <MenuItem value={opt} key={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
        <Button
          type="submit"
          id="margin-dense"
          margin="dense"
          variant="contained"
          disabled={!formik.isValid}
        >
          Save
        </Button>
      </form>
      <Modal open={open} onClose={handleCloseModal}>
        Employee Created!
      </Modal>
    </>
  );
};

export default EmployeeForm;
