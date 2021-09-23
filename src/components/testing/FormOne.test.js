import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormOne from "./FormOne";

test("render properly", () => {
  render(<FormOne />);

  screen.getByText("Please fill the form.");

  screen.getByLabelText("Username:");
  screen.getByLabelText("Password:");
  screen.getByLabelText("Email:");
  screen.getByLabelText("Terms & Conditions");

  screen.findByRole("button", { name: /submit/i });
});

test("submit button should be disabled on initial render", () => {
  render(<FormOne />);

  userEvent.type(screen.getByLabelText(/username:/i));

  userEvent.type(screen.getByLabelText(/password:/i));

  userEvent.type(screen.getByLabelText(/Email:/i));

  userEvent.type(screen.getByLabelText("Terms & Conditions"));

  userEvent.type(screen.getByRole("button", { name: /submit/i }));

  expect(screen.getByRole("button", "Submit")).toBeDisabled();
});

test("submit button should be Enabled when all fields are filled", async () => {
  const { getByLabelText } = render(<FormOne />);

  fireEvent.change(getByLabelText(/username/i), {
    target: { value: "Shubham Sharma" },
  });

  fireEvent.change(getByLabelText(/password/i), { target: { value: "123" } });

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "shubusharma29@gmail.com" },
  });

  fireEvent.click(getByLabelText("Terms & Conditions"));

  expect(screen.getByRole("button", "Submit")).toBeEnabled();
});
