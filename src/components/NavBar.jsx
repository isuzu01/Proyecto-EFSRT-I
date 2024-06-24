import React from "react";
import { Link } from "react-router-dom";


const NavBarItem = ({url, title, className,onClick}) => {
  
  return (
    <li className=" w-24 text-center">
      <Link
        className={`text-white hover:text-marca-red shadow-white ${className}`}
        onClick={onClick}
        to={url}
      >
      {title}
      </Link>
    </li>
  );
};
export default NavBarItem
