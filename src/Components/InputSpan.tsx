import { InputProps } from "../interfaces";
import { ChangeEvent, useRef, useState } from "react";

const InputSpan = ({ label, size, placeholder, value, type = "text", border, required, spanString }: InputProps) => {
    const [input, setInput] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
    };

    /* const useFocusInputOnMount = (
        inputRef: React.RefObject<HTMLInputElement>,
    ) => {
        useEffect(() => {
            // Focus on the input element when the component mounts
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, [inputRef]); // Dependency array includes inputRef to watch for changes
    };*/
    return (
        <div className="flex flex-col gap-2 pb-5 pt-5">
            <label htmlFor="timeInput">{label}</label>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <input
                        type={type}
                        id="timeInput"
                        ref={inputRef}
                        className={`${size} border-1 font-inherit transparant absolute left-0 top-0 w-full border-2 bg-transparent px-4 ${border}`}
                        placeholder={placeholder}
                        value={input}
                        onChange={handleInputChange}
                        aria-label={label}
                        aria-required={required}
                        required={required}
                    />
                    <div className="border-1 font-inherit w-full  pl-[17.8px] pt-[8.3px]">
                        <span>{input}</span>
                        {"  " + spanString}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputSpan;
