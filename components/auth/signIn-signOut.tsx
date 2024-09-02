"use client"

import { PersonOutlineIcon } from '../shared/Icons';
import { FC } from 'react';

const SignInSignOut: FC<{ session: any }> = ({ session }) => {
    const authLable = !session ? "Sign in" : "Sign out";
    const authUrl = session ? "/api/auth/signout" : "/api/auth/signin";
    return (
        <a href={authUrl} className="flex items-center text-sm font-sans text-core-neutral-900 gap-x-2 font-medium">
            <PersonOutlineIcon />
            {authLable}
        </a>
    )
}

export default SignInSignOut;