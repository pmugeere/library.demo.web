'use client'

import {SignInSignOut} from "@/app/components/auth";
import { SearchInput } from "@/app/components/shared/SearchInput";
import {NavigationLinks} from "@/app/components/header";
import { useSession } from "next-auth/react";

const Header = () => {
    const { data: session, status } = useSession()
    return (
        <header className="py-2 border-neutral-40 border-b">
            <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
                <div className="mb-2 h-11 hidden md:flex md:mb-4 md:items-center">
                    <div className="mr-auto flex gap-x-4">
                    </div>
                    <SignInSignOut session={session}/>
                </div>
            </div>
            <div className='max-w-md mx-auto'>
                <SearchInput />
            </div>
            <NavigationLinks />
        </header>
    );

}
export default Header;