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
            className={`${size} ${height} py-2 px-2 flex justify-center items-center border ${variant} cursor-pointer 
            ${isSelected ? 'bg-light-blue text-white' : backgroundColor} 
            text-sm transition duration-350 ease-in-out font-normal gap-1  
            ${selected ? '' : 'selectedStyle '}`}
            onClick={handleButtonClick}
        >
            {isSelected && icon}

            <div>{label}</div>
        </button>
    );
};
