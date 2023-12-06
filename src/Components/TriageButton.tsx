import '../index.css';
import { useState } from 'react';
import { TriageOption } from '../interfaces';

/**  this our the buttons we use for our userInterface with all hte props it takes */
export const TriageButton = ({
    selected,
    label,
    backgroundColor,
    selectedColor,
}: TriageOption) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleButtonClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <button
            className={`flex h-[32px] w-[100px] cursor-pointer items-center justify-center rounded px-2 py-2 
            ${isSelected ? selectedColor : backgroundColor} 
            duration-350 gap-1 text-sm font-normal transition ease-in-out  
            ${selected ? '' : 'selectedStyle '}`}
            onClick={handleButtonClick}
        >
            <div>{label}</div>
        </button>
    );
};
