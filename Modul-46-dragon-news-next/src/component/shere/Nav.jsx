"use client";

import Image from "next/image";
import Link from "next/link";
import userImg from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userAvatar = user?.image || userImg;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <>
      <div className="container mx-auto flex justify-between gap-4 mt-6">
        <div></div>
        <ul className="flex justify-between items-center text-gray-700 gap-3">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/about-us"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/career"}>Career</NavLink>
          </li>
        </ul>

        {isPending ? (
          <div>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : user ? (
          <div className="flex items-center gap-2">
            <h2>Hello,{user.name}</h2>
            <Image
              src={userAvatar}
              alt="User avatar"
              width={41}
              height={41}
              className="rounded-full object-cover min-w-[41px] min-h-[41px]" // সাইজ ফিক্স করার জন্য
              unoptimized={true}
            />
            <button
              className="btn bg-[#403F3F] text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Image
              src={userAvatar}
              alt="User avatar"
              width={41}
              height={41}
              unoptimized
            />
            <button className="btn bg-[#403F3F] text-white">
              <Link href={"/login"}>Login</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
