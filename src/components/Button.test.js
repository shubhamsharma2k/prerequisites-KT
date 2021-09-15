import { getByTestId, fireEvent, render } from "@testing-library/dom";
import Button from "./Button";

it("button clicks", () => {
  const { getByTestId } = render(<Button></Button>);
});
