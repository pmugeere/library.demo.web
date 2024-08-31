import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { auth } from "../lib/auth/authOptions"

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header session={session}/>
        <div className="max-w-[1280px] px-4 md:px-8 mx-auto py-6">
          {children}
        </div>
      </body>
    </html>
  );
}
