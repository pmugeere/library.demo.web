"use client"

import { providerMap } from "@/lib/auth/auth-options"
import { useSearchParams } from "next/navigation"
import {signinWith} from "@/app/(signInSignout)/auth/signin/signin-with"

export default async function SignInPage() {

    const searchParams=useSearchParams();
    const callbackUrl=searchParams.get("callbackUrl")||"/";
    return (
        <div className="flex flex-col items-center py-10">
            {Object.values(providerMap).map((provider) => (
                <form className="flex flex-col w-1/2 items-center" key={provider.id}
                    action={async () => await signinWith(provider.id,callbackUrl)}
                    >
                    <button
                        type="submit"
                        className="flex justify-center items-center px-4 mt-2 space-x-2 w-1/2 h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-800"
                    >
                        <span>Sign in with {provider.name}</span>
                    </button>
                </form>
            ))}
        </div>
    )
}