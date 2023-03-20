import { object, string, number, date } from "yup";

export const employeeSchema = object().shape({
  firstName: string().min(3).required("First name required"),
  lastName: string().min(3).required("Last name required"),
  // birthdate: date().required("BirthDate required"),
  // startDate: date().required("Start date required"),
  street: string().min(6).required("Street required"),
  city: string().min(3).required("City required"),
  state: string().min(3).required("State required"),
  zipCode: number().required("zipCode required"),
  department: string().min(3).required("Department required"),
});
