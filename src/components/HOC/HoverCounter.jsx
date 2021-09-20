import React from "react";
import CheckWrapper from "./CheckWrapper";

const HoverCounter = ({ counter, setCounter }) => {
  console.log("Hover", counter);
  return (
    <>
      <div className="text-center">
        <h1 onMouseOver={() => setCounter(counter + 1)}>
          Hovered {counter} times
        </h1>
      </div>
    </>
  );
};

export default CheckWrapper(HoverCounter);
