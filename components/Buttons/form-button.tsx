import { FC } from "react";

interface FormButtonProps {
    type?: "button" | "submit"
    handleOnClick?: ()=>void,
    state?: boolean | undefined,
    label: string 
}
const FormButton: FC<FormButtonProps> = ({type, handleOnClick, label, state }) => {
    return (
        <button type={type} onClick={handleOnClick} disabled={state}
            className="w-full px-4 mt-2 space-x-2 h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-800"
        >
            <span>{label}</span>
        </button>
    )

}

export default FormButton;