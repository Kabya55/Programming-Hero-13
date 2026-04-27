import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    // return NextResponse.redirect(new URL("/login", request.url));
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.url);

    return NextResponse.redirect(loginUrl);
  }

  // If the user is authenticated, you can proceed with the request
  // For example, you might want to add the session data to the request
  // request.session = session;

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/news/:path*",
};
