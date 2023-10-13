import './index.css'

import CheckIcon from './icons/checkIcon'

import { useState } from 'react'

export type ButtonProps = {
    primary?: boolean
    variant: string
    backgroundColor: string
    size: string
    label?: string
    icon?: any
    selected?: boolean
    onClick?: () => void
}

/** Primary button for our user interface */
export const Button = ({
    selected,
    icon,
    label,
    size,
    backgroundColor,
    variant,
    onClick,
}: ButtonProps) => {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <button
            className={`${size} h-12 py-2 px-2 flex  justify-center  items-center border ${variant} cursor-pointer 
            ${isSelected ? 'bg-dark-green text-brown-accent' : backgroundColor} 
            text-sm transition duration-300 ease-in-out  font-normal gap-2  
            ${selected ? '' : 'selectedStyle '}`}
            onClick={onClick}
        >
            {isSelected && <CheckIcon />}
            {icon}
            <div>{label}</div>
        </button>
    )
}
