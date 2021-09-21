import React from "react";
import CheckWrapper from "./CheckWrapper";

const CommentCounter = ({ counter, handleClick }) => {
  return (
    <>
      <div className="text-center mt-4">
        <button className="btn btn-primary " onClick={handleClick}>
          Commented {counter} times
        </button>
      </div>
    </>
  );
};

export default CheckWrapper(CommentCounter);
