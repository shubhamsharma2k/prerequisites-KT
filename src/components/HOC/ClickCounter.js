import React from "react";
import CheckWrapper from "./CheckWrapper";

const ClickCounter = ({ counter, setCounter }) => {
  console.log(counter);
  return (
    <>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          Liked {counter} times
        </button>
      </div>
    </>
  );
};

export default CheckWrapper(ClickCounter);
