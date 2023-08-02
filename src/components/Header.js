import React from "react";
import logo from "../logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" width={200}></img>
      </div>
    </div>
  )
};
export default Header;