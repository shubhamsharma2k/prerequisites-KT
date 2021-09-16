import axios from "axios";
import React, { useState } from "react";

const DemoForm = () => {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const postReq = async () => {
    const newData = {
      userId: 1,
      id: 101,
      title: "My post",
      body: "My post body",
    };

    const data = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newData
    );

    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //POST REQUEST

    postReq();
  };

  //USED FLEXBOX AND BOOSTRAP ALSO ONCHANGE EVENT

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: "400px" }}>
        <div className="d-flex flex-column mt-4 ms-4">
          <div className="mt-3">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mt-3">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mt-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-dark mt-3">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DemoForm;
