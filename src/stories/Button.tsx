import './index.css'

import CheckIcon from './icons/checkIcon'

import { useState } from 'react'

export type ButtonProps = {
    primary?: boolean
    variant: string
    backgroundColor?: string | void
    size: string
    label?: string
    icon?: any
    selected?: boolean
    onClick?: () => void
}

/**  this our the buttons we use for our userInterface with all hte props it takes */

export const Button = ({
    selected,

    label,
    size,
    backgroundColor,
    variant,
}: ButtonProps) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleButtonClick = () => {
        setIsSelected(!isSelected)
    }
    return (
        <button
            className={`${size} h-12 py-2 px-2 flex  justify-center  items-center border ${variant} cursor-pointer 
            ${isSelected ? 'bg-dark-green text-brown-accent' : backgroundColor} 
            text-sm transition duration-300 ease-in-out  font-normal gap-2  
            ${selected ? '' : 'selectedStyle '}`}
            onClick={handleButtonClick}
        >
            {isSelected && <CheckIcon />}

            <div>{label}</div>
        </button>
    )
}
