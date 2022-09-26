import { store } from "../app/store";
import { addEmployee } from "../features/employeeSlice";

describe("Redux state test", () => {
  it("Should state must return one array empty", () => {
    const employeesState = store.getState().employees;
    expect(employeesState).toEqual([]);
  });

  it("Should insert one employee", () => {
    const employee = {
      firstName: "User",
      lastName: "Test",
      birthdate: "01/01/1994",
      startDate: "01/01/2020",
      street: "12 rue du test",
      city: "Test City",
      state: "TestLand",
      zipCode: "05000",
      department: "",
    };
    store.dispatch(addEmployee(employee));
    const employeesState = store.getState().employees;
    expect(employeesState).toContain(employee);
  });
});
