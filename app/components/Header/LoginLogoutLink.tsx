'use client'

import { Session } from "next-auth";
import { FC } from "react";
import { PersonOutlineIcon } from '../shared/Icons';

const LoginLogoutLink: FC<{ session: Session | null }> = (session) => {
    const loginLogoutUrl = session ? "/api/auth/signout" : "/api/auth/signin";

    return (
        <a href={loginLogoutUrl} className="flex items-center text-sm font-sans text-core-neutral-900 gap-x-2 font-medium">
            <PersonOutlineIcon />
            {session && (<span className="leading-none">Logout</span>) || !session && (<span className="leading-none">Log in</span>)}
        </a>
    )
}

export default LoginLogoutLink;