import React from "react";
import CheckWrapper from "./CheckWrapper";

const HoverCounter = ({ counter, handleClick }) => {
  return (
    <>
      <div className="text-center">
        <h1 onMouseOver={handleClick}>Hovered {counter} times</h1>
      </div>
    </>
  );
};

export default CheckWrapper(HoverCounter);
