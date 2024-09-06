"use client"

import { PersonOutlineIcon } from '../shared/Icons';
import { usePathname } from 'next/navigation';
import { FC } from 'react';


const getAuthStatus = (session: any) => {
    const pathname = usePathname() || "/";
    const callbackUrl = encodeURIComponent(pathname);
    const authLabel = !session ? "Sign in" : "Sign out";
    const authUrl = session ? "/api/auth/signout" : `/api/auth/signin?callbackUrl=${callbackUrl}`;
    return { authUrl, authLabel };
}

const SignInSignOut: FC<{ session: any }> = ({ session }) => {
    const { authUrl, authLabel } = getAuthStatus(session);
    return (
        <a href={authUrl} className="flex items-center text-sm font-sans text-core-neutral-900 gap-x-2 font-medium">
            <PersonOutlineIcon />
            {authLabel}
        </a>
    )
}

export default SignInSignOut;
