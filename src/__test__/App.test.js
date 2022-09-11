import {
  render,
  screen,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders Homepage to root", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App></App>
    </MemoryRouter>
  );
  
  expect(screen.getByTestId("form-link")).toHaveTextContent("New");
});

test("renders Employee form to /new", async () => {
  render(
    <MemoryRouter initialEntries={["/new"]}>
      <App></App>
    </MemoryRouter>
  );

  expect(screen.getByTestId("employee-form")).toHaveTextContent("First Name");
});
