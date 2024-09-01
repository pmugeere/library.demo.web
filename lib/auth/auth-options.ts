import NextAuth from "next-auth"
import { authProviders } from "./auth-providers"
import { authCallBacks } from "./auth-callbacks"

export const providerMap = authProviders.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider();
        return {id: providerData.id, name: providerData.name}
    }else{
        return {id: provider.id, name: provider.name}
    }
}).filter((provider)=> provider.id !=="credentials");

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: authProviders,
    callbacks: authCallBacks,
    pages: {
        signIn: "/auth/profile/signin"
    },
    // jwt: true, // Enable JWT tokens
    // debug: true, // Enable debug messages in the console
    // logger: true, // Enable logging to the console
    // session: {
    //     strategy: "jwt",
    //     maxAge: 0 * 0 * 5 * 60, // 5 minutes for testing
    //  },
    secret: process.env.NEXTAUTH_SECRET
});