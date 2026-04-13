import React from "react";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { WiTime8 } from "react-icons/wi";
import { ImStatsDots } from "react-icons/im";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `px-4 py-2 mr-1 rounded-lg text-md font-semibold transition-all duration-200
        ${
          isActive
            ? "bg-[#244D3F] text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`
          }
        >
          <IoHomeOutline />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            `px-4 py-2 mr-1 rounded-lg text-md font-semibold transition-all duration-200
        ${
          isActive
            ? "bg-[#244D3F] text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`
          }
        >
          <WiTime8 size={18} />
          Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            `px-4 py-2 mr-1 rounded-lg text-md font-semibold transition-all duration-200
        ${
          isActive
            ? "bg-[#244D3F] text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`
          }
        >
          <ImStatsDots />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
