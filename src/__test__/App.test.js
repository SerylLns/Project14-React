/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { store } from "../app/store";

test("renders Homepage to root", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <App></App>
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId("form-link")).toHaveTextContent("New");
});

test("renders Employee form to /new", async () => {
  render(
    <MemoryRouter initialEntries={["/new"]}>
      <Provider store={store}>
        <App></App>
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId("employee-form")).toHaveTextContent("First Name");
});
