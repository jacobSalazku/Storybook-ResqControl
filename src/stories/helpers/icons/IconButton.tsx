import '../index.css'

export interface IconButtonProps {
    variant: string
    backgroundColor?: string
    size?: string
    icon?: any
    selected?: boolean
}

/** Primary button for our user interface */
export const IconButton = ({
    selected,
    icon,
    size,
    backgroundColor,
    variant,
}: IconButtonProps) => {
    return (
        <button
            className={`${size} py-2 px-2 flex  justify-center border-2 ${variant} cursor-pointer ${backgroundColor} }
    text-sm transition duration-300 ease-in-out  font-normal  transition duration-300 ease-in-out${
        selected ? 'border-p-blue' : ''
    }`}
        >
            {icon}
        </button>
    )
}
