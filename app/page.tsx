import { auth } from "../lib/auth/authOptions"
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth(); // pass this as props from rootLayout

  return (
    <div>
      {session && (<h1>Welcome, {session.user.name}!</h1>)}
      {!session && (<h1>Welcome, guest!</h1>)}
    </div>
  );
}