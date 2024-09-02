"use server"

import { signIn } from "@/lib/auth/auth-options"

export async function signinWith (provider: string, callbackUrl:string) {
    await signIn(provider, { callbackUrl});
    // try {
    //     await signIn(provider.id, { redirectTo: "/" });
    // } catch (error) {
    //     if (error instanceof AuthError) {
    //         console.error(error)
    //         return redirect(`/auth/error?error=${error.type}`)
    //     }

    //     return redirect(`/auth/error?error=`)
    // }
}