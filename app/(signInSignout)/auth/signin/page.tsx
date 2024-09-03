"use client"

import { providerMap } from "@/lib/auth/auth-options"
import { useSearchParams } from "next/navigation"
import { signinWith } from "@/app/(signInSignout)/auth/signin/signin-with"

export default async function SignInPage() {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                Library Demo
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-lg leading-tight tracking-tight text-gray-900 md:text-xl">
                        Sign in to your account
                    </h1>
                    {
                        Object.values(providerMap).map((provider) => (
                            signinWithProviderForm(provider, callbackUrl)
                        ))
                    }
                </div>


            </div>
        </div >
    )
}

function signinWithProviderForm(provider: { id: string; name: string; }, callbackUrl: string) {
    return (
        <form className="space-y-4 md:space-y-6" key={provider.id}
            action={async () => await signinWith(provider.id, callbackUrl)}>
            <button type="submit"
                className="w-full px-4 mt-2 space-x-2 w-1/2 h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-800"
            >
                <span>Sign in with {provider.name}</span>
            </button>
        </form>
    );
}
