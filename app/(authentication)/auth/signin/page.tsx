import { SigninForm } from "@/components/signin"

export default async function SignInPage() {

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                Library Demo
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <SigninForm />
            </div>
        </div >
    )
}