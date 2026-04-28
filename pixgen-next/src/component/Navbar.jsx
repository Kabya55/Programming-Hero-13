"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b px-2 relative">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Icon */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
            ☰
          </button>

          <div>
            <Link href="/" className="glass-btn flex">
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              <h3 className="font-black text-lg">pixgen.</h3>
            </Link>
          </div>
        </div>

        {/* Middle (Desktop only) */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li className="glass-btn px-3 py-2 md:px-6 md:py-3">
            <Link href="/">Home</Link>
          </li>

          {["all-photos", "pricing", "profile"].map((item) => (
            <li key={item} className="glass-btn">
              <Link href={`/${item}`}>{item.replace("-", " ")}</Link>
            </li>
          ))}
        </ul>

        {/* Right side (ALWAYS visible) */}
        <div className="flex">
          <ul className="flex items-center gap-2 md:gap-4 text-sm">
            <li className="glass-btn px-3 py-2 md:px-6 md:py-3">
              <Link href="/signup">SignUp</Link>
            </li>
            <li className="glass-btn px-3 py-2 md:px-6 md:py-3">
              <Link href="/signin">SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-3 pb-4">
          <Link href="/" className="glass-btn">
            Home
          </Link>
          <Link href="/all-photos" className="glass-btn">
            All Photos
          </Link>
          <Link href="/pricing" className="glass-btn">
            Pricing
          </Link>
          <Link href="/profile" className="glass-btn">
            Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
