import { render, screen } from "@testing-library/react";
import { store } from "../app/store";
import { addEmployee } from "../features/employeeSlice";
import { employeeTest } from "./State.test";
import List from "../containers/List";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("Test list", () => {
  test("List should display employees of redux state", () => {
    store.dispatch(addEmployee(employeeTest));
    render(
      <MemoryRouter>
        <Provider store={store}>
          <List />
        </Provider>
      </MemoryRouter>
    );
    const list = screen.getByTestId("list-table");
    expect(list).toHaveTextContent(employeeTest.firstName);
    expect(list).toHaveTextContent(employeeTest.lastName);
    expect(list).toHaveTextContent(employeeTest.city);
  });
});
