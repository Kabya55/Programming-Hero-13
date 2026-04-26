"use client";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: ProcessingInstruction.env.BETTER_AUTH_UR,
});

export const { signIn, signUp, useSession } = createAuthClient();
