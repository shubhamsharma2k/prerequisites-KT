import DemoForm from "./DemoForm";
import { render, fireEvent } from "@testing-library/react";

test("form render properly", () => {
  const { getByTestId } = render(<DemoForm />);

  const usernameElement = getByTestId("label_username");
  const inputUsername = getByTestId("input_username");

  expect(usernameElement).toBeInTheDocument();
  expect(inputUsername).toBeInTheDocument();
  expect(inputUsername).toHaveAttribute("type", "text");

  const passwordElement = getByTestId("label_password");
  const inputPassword = getByTestId("input_password");

  expect(passwordElement).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveAttribute("type", "password");

  const emailElement = getByTestId("label_email");
  const inputEmail = getByTestId("input_email");

  expect(emailElement).toBeInTheDocument();
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveAttribute("type", "email");
});
