import React from "react";

const DemoArrayMethods = () => {
  const items = [
    {
      name: "Bike",
      price: 100,
    },
    {
      name: "TV",
      price: 200,
    },
    {
      name: "Album",
      price: 10,
    },
    {
      name: "Book",
      price: 5,
    },
    {
      name: "Phone",
      price: 1000,
    },
    {
      name: "Computer",
      price: 3000,
    },
    {
      name: "keyboard",
      price: 25,
    },
  ];

  //   __________________________________________________________
  //Filter Method

  const filterUsingFilter = items.filter((item) => {
    return item.price <= 100;
  });
  console.log(filterUsingFilter);

  //   __________________________________________________________
  //Map Method
  const filterUsingMap = items.map((item) => {
    return item.name;
  });

  console.log(filterUsingMap);

  //   __________________________________________________________
  //Find Method
  const findMethod = items.find((item) => {
    return item.name === "Book";
  });

  console.log(findMethod);

  //   ____________________________________________________________
  //   ForEach
  items.forEach((item) => console.log(item.name));

  //   _____________________________________________________________
  //Slice Method

  let users = ["shubham", "sharma", "is", "a", "developer"];

  //   const slice = users.slice(0, 3);

  //   console.log(slice);

  //   ______________________________________________________________

  //Splice Method

  let splice = users.splice(1, 3, "asdasdasd");

  console.log(splice);

  return <div></div>;
};

export default DemoArrayMethods;
