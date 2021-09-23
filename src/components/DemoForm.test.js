import DemoForm from "./DemoForm";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("form render properly", () => {
  //getByTestId gets the data-testid from the component
  const { getByTestId } = render(<DemoForm />);

  const usernameElement = getByTestId("label_username");
  const inputUsername = getByTestId("input_username");

  //Checks whether the element is in the document
  expect(usernameElement).toBeInTheDocument();
  expect(inputUsername).toBeInTheDocument();

  // Checks whether the element has a specific attribute
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

test("submit button", () => {
  const { getByTestId } = render(<DemoForm />);

  const submitButton = getByTestId("submit_form");

  //Checks the click event on the selected button
  fireEvent.click(submitButton);

  //Checks whether the event is called or not
  expect(submitButton).toBeCalled();
});
