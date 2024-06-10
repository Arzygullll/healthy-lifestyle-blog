import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/add"}>ДОБАВИТЬ</NavLink>
      <NavLink to={"/"}>ГЛАВНОЕ</NavLink>
      <NavLink to={"/edit"}>РЕДАКТИРОВАНИЕ</NavLink>
    </div>
  );
};

export default Navbar;
