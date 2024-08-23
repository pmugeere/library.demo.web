import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth/authOptions";
import { useSession, signIn } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession(authOptions);


  if (!session) {
    // Redirect to sign-in page if not authenticated
    return (
      <div>
        <h1>You are not signed in</h1>
        <a href="/api/auth/signin">Sign In</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <a href="/api/auth/signout">Logout</a>
    </div>
  );
}