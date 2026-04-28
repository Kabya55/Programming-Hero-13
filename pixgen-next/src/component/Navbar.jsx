"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const baseBtn =
    "px-3 py-1 rounded-md border border-gray-300 text-gray-700 transition-all duration-200 hover:bg-black hover:text-white hover:border-black";

  const activeBtn = "bg-black text-white";

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image src={"/logo.png"} alt="logo" width={30} height={30} />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className={`${baseBtn} ${pathname === "/" ? activeBtn : ""}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-photos"
              className={`${baseBtn} ${
                pathname === "/all-photos" ? activeBtn : ""
              }`}
            >
              All Photos
            </Link>
          </li>

          <li>
            <Link
              href="/pricing"
              className={`${baseBtn} ${
                pathname === "/pricing" ? activeBtn : ""
              }`}
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={`${baseBtn} ${
                pathname === "/profile" ? activeBtn : ""
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-2 text-sm">
          <ul className="flex items-center gap-4  text-sm">
            <li className="px-3 py-1 rounded-md bg-gray-300 transition-all duration-200 hover:bg-black/70 hover:text-white">
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li className="px-3 py-1 rounded-md bg-gray-300 transition-all duration-200 hover:bg-black/70 hover:text-white">
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
