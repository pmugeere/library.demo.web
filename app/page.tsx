import { auth } from "../lib/auth/authOptions"
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  if(session == null){
    return redirect("api/auth/signin")
  }

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <a href="/api/auth/signout">Logout</a>
    </div>
  );
}