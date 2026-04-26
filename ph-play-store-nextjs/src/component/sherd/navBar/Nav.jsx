"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import Logo from "../../../assets/logo.png";

const Nav = () => {
  const pathname = usePathname();

  const navLink = (path, label) => (
    <Link
      href={path}
      className={`px-3 py-1 rounded-md font-medium transition ${
        pathname === path
          ? "bg-purple-500 text-white"
          : "text-gray-700 hover:bg-purple-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* 🔹 Left: Logo + Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
            <li>{navLink("/", "Home")}</li>
            <li>{navLink("/apps", "Apps")}</li>
            <li>{navLink("/installation", "Installation")}</li>
            <li>{navLink("/dashboard", "Dashboard")}</li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="ml-2">
          <Image src={Logo} alt="logo" width={52} height={40} />
        </Link>
      </div>

      {/* 🔹 Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>{navLink("/", "Home")}</li>
          <li>{navLink("/apps", "Apps")}</li>
          <li>{navLink("/installation", "Installation")}</li>
          <li>{navLink("/dashboard", "Dashboard")}</li>
        </ul>
      </div>

      {/* 🔹 Right: GitHub Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/"
          target="_blank"
          className="btn bg-purple-500 text-white hover:bg-purple-600"
        >
          <FaGithub className="mr-1" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Nav;
