"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const Nav = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <p>Loading...</p>;
  }
  console.log(data);

  const user = data?.user;
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">Kabya</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
          </ul>

          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <p>{user.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/auth/signin">Sign in</Link>
                <Link href="/auth/signup">Sign up</Link>
              </div>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Nav;
