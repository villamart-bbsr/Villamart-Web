import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({
  link,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  return (
    <NavLink
      to={link}
      className={`flex items-center gap-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
        name === activeNavName
          ? "font-bold text-white bg-orange-500 shadow-md"
          : "font-medium text-gray-200 hover:bg-green-700"
      }`}
      onClick={() => setActiveNavName(name)}
    >
      <span className={name === activeNavName ? "text-white" : "text-orange-300"}>
        {icon}
      </span>
      {title}
    </NavLink>
  );
};

export default NavItem;