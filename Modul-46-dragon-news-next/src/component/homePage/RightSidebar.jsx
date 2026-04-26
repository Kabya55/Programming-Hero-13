"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSidebar = () => {
  const handelGoolgeSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const githubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <>
      {/* Login */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Login With</h2>

        <button
          onClick={handelGoolgeSignIn}
          className="w-full border py-2 rounded hover:bg-gray-500 flex items-center justify-center gap-2 mb-3"
        >
          <FaGoogle />
          <span>Login with Google</span>
        </button>

        <button
          onClick={githubSignIn}
          className="w-full border py-2 rounded hover:bg-gray-500 flex items-center justify-center gap-2"
        >
          <FaGithub />
          <span>Login with Github</span>
        </button>
      </div>

      {/* Social */}
      <div>
        <h2 className="text-xl font-bold mb-4">Find Us On</h2>

        <div className="border rounded overflow-hidden">
          <div className=" border-b px-4 py-3  hover:bg-gray-500 flex items-center justify-center gap-2">
            <FaFacebook />
            <span>Facebook</span>
          </div>

          <div className="border-b px-4 py-3  hover:bg-gray-500 flex items-center justify-center gap-2">
            <FaTwitter />
            <span>Twitter</span>
          </div>

          <div className="px-4 py-3  hover:bg-gray-500 flex items-center justify-center gap-2">
            <FaInstagram />
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
