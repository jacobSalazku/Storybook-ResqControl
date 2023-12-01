import { InputProps } from "../interfaces";

const Input = ({ label, size, placeholder, value, type = "text", onChange, border, required }: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="timeInput">{label}</label>
            <input
                type={type}
                id="timeInput"
                className={`${size} border-2 px-4  ${border}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                aria-label={label}
                aria-required="true"
                required={required}
            />
        </div>
    );
};

export default Input;
