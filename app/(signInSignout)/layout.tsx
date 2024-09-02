import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { auth } from "@/lib/auth/auth-options"

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1280px] px-4 md:px-8 mx-auto py-6">
          {children}
        </div>
      </body>
    </html>
  );
}
