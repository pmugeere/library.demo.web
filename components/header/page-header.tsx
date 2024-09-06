'use client'

import {AuthLink} from "@/components/auth";
import { SearchInput } from "@/components/shared/SearchInput";
import {NavigationLinks} from "@/components/header";

const Header = () => {
    return (
        <header className="py-2 border-neutral-40 border-b">
            <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
                <div className="mb-2 h-11 hidden md:flex md:mb-4 md:items-center">
                    <div className="mr-auto flex gap-x-4">
                    </div>
                    <AuthLink />
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