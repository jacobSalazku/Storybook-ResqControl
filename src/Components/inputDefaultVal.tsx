import { useState } from 'react';

interface labelProps {
    label: string;
    templateStr?: string;
    size: string;
    placeholder: string;
    value?: string;
}
const InputDefaultVal = ({ label, size, placeholder }: labelProps) => {
    const [inputValue, setInputValue] = useState('');

    /*
  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (inputValue === '') {
      setInputValue('/min');
    }
  };
*/
    return (
        <div className="flex flex-col">
            <label htmlFor="timeInput">{label}</label>
            <input
                type="text"
                id="timeInput"
                className={`${size} px-4 border-2 mt-4`}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                /*
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                aria-labbel*/
            />
        </div>
    );
};

export default InputDefaultVal;
