"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userAvatar = user?.image;

  const router = useRouter();
  const pathname = usePathname();

  const baseBtn =
    "px-3 py-1 rounded-md border border-gray-300 text-gray-700 transition-all duration-200 hover:bg-black hover:text-white hover:border-black";

  const activeBtn = "bg-black text-white";

  // ✅ Logout handler (clean version)
  const handleLogout = async () => {
    try {
      const res = await authClient.signOut();

      if (res?.data) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
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

        {/* Right Side */}
        {isPending ? (
          <div>
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ) : user ? (
          <div className="flex items-center gap-3">
            <h2 className="text-sm">Hello, {user.name}</h2>

            <Image
              src={userAvatar || "/default-avatar.png"}
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
              unoptimized
            />

            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded-md bg-gray-300 transition-all duration-200 hover:bg-black/70 hover:text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2 text-sm">
            <Link
              href="/signup"
              className="px-3 py-1 rounded-md bg-gray-300 hover:bg-black/70 hover:text-white transition"
            >
              SignUp
            </Link>
            <Link
              href="/login"
              className="px-3 py-1 rounded-md bg-gray-300 hover:bg-black/70 hover:text-white transition"
            >
              SignIn
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
