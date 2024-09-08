"use client"

import { providerMap } from "@/lib/auth/auth-providers"
import { useSearchParams } from "next/navigation";
import { signInUser } from "@/lib/signin-action";

export default function ProvidersList() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    return (
        Object.values(providerMap).map((provider) =>
            <div id={provider.id} className="space-y-4 md:space-y-6" key={provider.id}>
                <button type="submit" onClick={() => signInUser(provider.id, callbackUrl)}
                    className="w-full px-4 mt-2 space-x-2 h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-800"
                >
                    <span>Sign in with {provider.name}</span>
                </button>
            </div>
        )
    )
}