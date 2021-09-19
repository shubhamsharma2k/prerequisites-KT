import _ from "lodash";
import React from "react";

const DemoLodash = () => {
  //ARRAY FUNCTIONS

  var users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "Shubham", age: 23, active: true },
    { user: "Karan", age: 24, active: false },
    { user: "Vij", age: 30, active: false },
    { user: "Kusha", age: 50, active: true },
  ];

  var emptyUser = {};

  //Filter Method _.filter
  console.log(
    _.filter(users, (o) => {
      return o.age >= 40;
    })
  );

  //Sum Method _.sum
  console.log("_.sum() = " + _.sum([1, 2, 3, 4, 5]));

  //isEmpty Method _.isEmpty
  console.log("_.isEmpty() " + _.isEmpty(emptyUser));

  //find Method _.find
  console.log(
    "_.find() " +
      _.find(users, (o) => {
        return o.age < 40;
      })
  );

  return <div>LODASH: See Console.log</div>;
};

export default DemoLodash;
