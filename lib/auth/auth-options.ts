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
        signIn: "/auth/signin"
    },
    secret: process.env.NEXTAUTH_SECRET
});