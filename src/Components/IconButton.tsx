import '../index.css'

export interface IconButtonProps {
    variant: string
    backgroundColor: string
    size: string
    icon: any | JSX.ElementClass
    selected?: boolean
    hover?: string
}

/** Primary button for our user interface  without text only Icons */
export const IconButton = ({
    selected,
    icon,
    size,
    backgroundColor,
    variant,
    hover,
}: IconButtonProps) => {
    return (
        <button
            className={`${size} ${backgroundColor} ${hover}   py-2 px-2 flex flex-row h-12 items-center justify-center border-2 ${variant} cursor-pointer  }
    text-sm transition duration-300 ease-in-out  font-medium  transition duration-300 ease-in-out${
        selected ? 'border-p-blue' : ''
    }`}
        >
            {icon}
        </button>
    )
}
