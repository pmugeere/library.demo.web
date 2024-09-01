import NextAuth from "next-auth"
import { authProviders } from "./auth-providers"
import { authCallBacks } from "./auth-callbacks"

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: authProviders,
    callbacks: authCallBacks,
    // session: {
    //     strategy: "jwt",
    //     maxAge: 0 * 0 * 5 * 60, // 5 minutes for testing
    //  },
    secret: process.env.NEXTAUTH_SECRET
});