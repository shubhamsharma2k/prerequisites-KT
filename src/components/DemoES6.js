import React, { useEffect, useState } from "react";
import axios from "axios";
const DemoES6 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    fetchData();
  }, []);

  //Array Filter function
  let filteredUsers = users.filter((id) => {
    return id.id > 5;
  });
  console.log(filteredUsers);

  return (
    <div>
      {/* Array Map function */}
      {users.map((user) => {
        const { address, name } = user;

        return (
          <div key={user.id}>
            <h1>{name}</h1>
            <p>FROM: {address.city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DemoES6;
