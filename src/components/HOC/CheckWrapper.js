import React, { useState } from "react";

const CheckWrapper = (WrappedComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
      setCounter(counter + 1);
    };

    return <WrappedComponent counter={counter} handleClick={handleClick} />;
  };
  return NewComponent;
};

export default CheckWrapper;

// const IronMan = withSuit( TonyStark )
// IronMan with suit passing in Tony Stark as a parameter here Tony Stark is
// original component with suit is the function which
// will enhance Tony Stark and return Iron Man which is enhanced component

// https://reactjs.org/docs/higher-order-components.html
