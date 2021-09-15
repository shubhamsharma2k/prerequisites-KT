import DemoUseState from "./DemoUseState";
import { render, fireEvent } from "@testing-library/react";

test("header renders properly", () => {
  const { getByTestId } = render(<DemoUseState />);
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("My Counter");
});

test("counter initially starts at 0", () => {
  const { getByTestId } = render(<DemoUseState />);
  const counterElement = getByTestId("counterValue");

  expect(counterElement.textContent).toBe("0");
});

test("add button renders with -", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonMinusElement = getByTestId("buttonMinus");

  expect(buttonMinusElement.textContent).toBe("-");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonPlusElement = getByTestId("buttonPlus");

  expect(buttonPlusElement.textContent).toBe("+");
});

test("Increse value of Value state by clicking + button", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonPlusElement = getByTestId("buttonPlus");

  const counterElement = getByTestId("counterValue");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(buttonPlusElement);

  expect(counterElement.textContent).toBe("1");
});

test("Decrement value of Value state by clicking - button", () => {
  const { getByTestId } = render(<DemoUseState />);
  const buttonMinusElement = getByTestId("buttonMinus");

  const counterElement = getByTestId("counterValue");

  fireEvent.click(buttonMinusElement);

  expect(counterElement.textContent).toBe("0");
});
