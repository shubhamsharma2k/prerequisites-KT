import React, { useState } from "react";

const FormOne = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    checked: false,
    disabled: true,
  });

  const { userName, password, email, checked, disabled } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCheckbox = () => {
    return setFormData({ ...formData, checked: !checked });
  };

  return (
    <div className="right d-flex flex-column ">
      <form onSubmit={handleSubmit}>
        <h3 className="my-3">Please fill the form.</h3>

        <div className="mt-1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="userName"
            value={userName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="form-control"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            className="form-control"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mt-3">
          <input
            type="checkbox"
            name="checkbox"
            className="custom-control-input"
            id="checkbox"
            checked={checked}
            onChange={handleCheckbox}
          />
          <label className="custom-control-label" htmlFor="checkbox">
            Terms & Conditions
          </label>
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              userName !== "" &&
              password !== "" &&
              email !== "" &&
              checked === true
                ? !disabled
                : disabled
            }
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
