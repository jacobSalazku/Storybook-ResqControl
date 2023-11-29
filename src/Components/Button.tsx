import '../index.css';
import { useState } from 'react';
import { ButtonProps } from '../interfaces';

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
            className={`${size} ${height} flex items-center justify-center border px-2 py-2 ${variant} cursor-pointer 
            ${isSelected ? 'bg-light-blue text-white' : backgroundColor} 
            duration-350 gap-1 text-sm font-normal transition ease-in-out  
            ${selected ? '' : 'selectedStyle '}`}
            onClick={handleButtonClick}
        >
            {isSelected && icon}

            <div>{label}</div>
        </button>
    );
};
