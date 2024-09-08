import { signOut } from "next-auth/react";
import { FC, useState } from "react";


interface SignoutButtonProps {
    callbackUrl: string | undefined;
}

const SignoutButton: FC<SignoutButtonProps> = ({ callbackUrl }) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSignout = async () => {
        setIsLoading(true);
        try {
            await signOut({ callbackUrl: callbackUrl || "/"});
            
        } catch (error) {
            console.error("Error signing out: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button type="button" onClick={handleSignout} disabled={isLoading}
            className="w-full px-4 mt-2 space-x-2 h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-800"
        >
            <span>{isLoading? "Signing out..." : "Sign out"}</span>
        </button>
    )
}

export default SignoutButton;