import React, { useState } from "react";

const DemoUseState = () => {
  //useState HOOK EXAMPLE
  const [value, setValue] = useState(0);

  const handleDecrease = (e) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleIncrease = (e) => {
    if (value < 10) {
      setValue(value + 1);
    }
  };

  return (
    <div className="container">
      <h2 data-testid="header">My Counter</h2>

      <button
        className="btn btn-primary mx-4"
        onClick={(e) => handleDecrease(e)}
        data-testid="buttonMinus"
      >
        -
      </button>
      <span data-testid="counterValue">{value}</span>
      <button
        className="btn btn-primary mx-4"
        onClick={(e) => handleIncrease(e)}
        data-testid="buttonPlus"
      >
        +
      </button>
    </div>
  );
};

export default DemoUseState;
