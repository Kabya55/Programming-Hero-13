"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    toast.success("Logged out successfully!");
    await authClient.signOut();
  };

  return (
    <nav className="flex justify-between items-center bg-white p-5">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>
            <Button className={"rounded-none"}>Home</Button>
          </Link>
        </li>
        <li>
          <Link href={"/destinations"}>
            <Button className={"rounded-none"}>Destinations</Button>
          </Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>
            <Button className={"rounded-none"}>My Bookings</Button>
          </Link>
        </li>

        <li>
          <Link href={"/add-destination"}>
            <Button className={"rounded-none"}>Add Destination</Button>
          </Link>
        </li>
      </ul>

      <div>
        <Link href={"/"}>
          <Image
            src={"/assets/Wanderlast.png"}
            height={150}
            width={150}
            alt="logo"
          />
        </Link>
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>
            <Button className={"rounded-none"}>Profile</Button>
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button
                variant="danger"
                className={"rounded-none"}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"}>
                <Button className={"rounded-none"}>Login</Button>
              </Link>
            </li>
            <li>
              <Link href={"/signup"}>
                <Button className={"rounded-none"}>Sign Up</Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
