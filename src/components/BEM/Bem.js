import React from "react";
import "./style.css";

const Bem = () => {
  //BLOCK__ELEMENT--MODIFIER
  //navContainer -----> Block
  //navContainer__listGroup -----> Element
  //navContainer__listItem--login -----> Modifier
  return (
    <>
      <nav className="navContainer">
        <div className="navContainer__listGroup">
          <ul>
            <li className="navContainer__listItem">
              <a href="#">Navbar</a>
            </li>
          </ul>
        </div>
        <div className="navContainer__listGroup">
          <ul>
            <li className="navContainer__listItem">
              <a href="#">Home</a>
            </li>

            <li className="navContainer__listItem">
              <a href="#">Services</a>
            </li>
            <li className="navContainer__listItem">
              <a href="#">Contact Us</a>
            </li>
            <li className="navContainer__listItem navContainer__listItem--login">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Bem;
