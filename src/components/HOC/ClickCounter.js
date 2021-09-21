import React from "react";
import CheckWrapper from "./CheckWrapper";

const ClickCounter = ({ counter, handleClick }) => {
  return (
    <>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleClick}>
          Liked {counter} times
        </button>
      </div>
    </>
  );
};

export default CheckWrapper(ClickCounter);
