import React from "react";
import Check from "./Check";

const ClickCounter = ({ counter, handleCounter }) => {
  console.log(counter);
  return (
    <>
      <div className="text-center">
        <button className="btn btn-primary">Liked {counter} times</button>
      </div>
    </>
  );
};

export default Check(ClickCounter);
