import '../index.css';

import { useState } from 'react';

// define object
export interface ButtonProps {
    primary?: boolean;
    variant: string;
    backgroundColor?: string | void;
    size: string;
    label: string;
    icon?: JSX.Element;
    selected?: boolean;
    onClick?: () => void;
    height?: string;
}

/**  this our the buttons we use for our userInterface with all hte props it takes */

export const Button = ({
    selected,
    icon,
    label,
    size,
    backgroundColor,
    variant,
    height = 'h-12',
}: ButtonProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleButtonClick = () => {
        setIsSelected(!isSelected);
    };
    return (
        <button
            className={`${size} ${height} py-2 px-2 flex justify-center items-center border ${variant} cursor-pointer 
            ${isSelected ? 'bg-light-blue text-white' : backgroundColor} 
            text-sm transition duration-350 ease-in-out  font-normal gap-2  
            ${selected ? '' : 'selectedStyle '}`}
            onClick={handleButtonClick}
        >
            {isSelected && icon}

            <div>{label}</div>
        </button>
    );
};
