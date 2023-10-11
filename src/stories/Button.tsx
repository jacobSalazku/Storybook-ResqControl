import './index.css'

import CheckIcon from './icons/checkIcon'

import { useState } from 'react'

export interface ButtonProps {
    primary?: boolean
    variant: string
    backgroundColor?: string
    size?: string
    label?: string
    icon?: any
    selected?: boolean
}

/** Primary button for our user interface */
export const Button = ({
    selected,
    icon,
    label,
    size,
    backgroundColor,
    variant,
}: ButtonProps) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
        if (selected) {
            setIsSelected(!isSelected)
        }
    }

    return (
        <button
            className={`${size} py-2 px-2 flex  justify-center border-2 ${variant} cursor-pointer ${backgroundColor} }
    text-sm transition duration-300 ease-in-out mb-5 font-normal  transition duration-300 ease-in-out${
        selected ? 'border-p-blue' : ''
    }`}
            onClick={handleClick}
        >
            {isSelected && <CheckIcon />}
            {label} {icon}
        </button>
    )
}
