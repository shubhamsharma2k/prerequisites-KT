import DemoUseState from "../../components/DemoUseState";
import { render, fireEvent } from "@testing-library/react";

//Counter Value Test
test("header renders properly", () => {
  const { getByTestId } = render(<DemoUseState />);
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("My Counter");
});

//Inital counter value Test
test("counter initially starts at 0", () => {
  const { getByTestId } = render(<DemoUseState />);
  const counterElement = getByTestId("counterValue");

  expect(counterElement.textContent).toBe("0");
});

//Minus Button Test
test("Minus button renders with -", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonMinusElement = getByTestId("buttonMinus");

  expect(buttonMinusElement.textContent).toBe("-");
});

//Add Button Test
test("add button renders with +", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonPlusElement = getByTestId("buttonPlus");

  expect(buttonPlusElement.textContent).toBe("+");
});

//Increase value on add button click
test("Increse value of Value state by clicking + button", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonPlusElement = getByTestId("buttonPlus");

  const counterElement = getByTestId("counterValue");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(buttonPlusElement);

  expect(counterElement.textContent).toBe("1");
});

//Decrease value on add button click
test("Decrement value of Value state by clicking - button", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonMinusElement = getByTestId("buttonMinus");

  const counterElement = getByTestId("counterValue");

  fireEvent.click(buttonMinusElement);

  expect(counterElement.textContent).toBe("0");
});
