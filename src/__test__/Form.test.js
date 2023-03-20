import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../app/store";
import EmployeeForm from "../components/EmployeeForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

describe("New employee form test", () => {
  test("empty fields should diplay error messages", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <EmployeeForm />
          </LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText(/first Name/i), "az");
    expect(
      await screen.findByText(/firstName must be at least 3 characters/i)
    ).toBeVisible();
    expect(await screen.findByTestId("firstNameError")).toHaveClass("active");
    expect(await screen.findByTestId("lastNameError")).toHaveClass("active");
  });
});
