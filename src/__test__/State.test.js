import { store } from "../app/store";
import { addEmployee } from "../features/employeeSlice";

export const employeeTest =
  {
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

describe("Redux state test", () => {
  it("Should state must return one array empty", () => {
    const employeesState = store.getState().employees;
    expect(employeesState).toEqual([]);
  });

  it("Should can insert one employee on store", () => {
    store.dispatch(addEmployee(employeeTest));
    const employeesState = store.getState().employees;
    expect(employeesState.length).toEqual(1);
  });

  it("Should get employees on store", () => {
    for (const i of new Array(3)) {
      store.dispatch(addEmployee(employeeTest));
    }
    const employeesState = store.getState().employees;
    expect(employeesState.length).toEqual(4);
  });
});
