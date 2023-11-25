interface InputProps {
    label: string;
    templateStr?: string;
    size: string;
    placeholder: string;
    value?: string;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    border?: string;
    required?: boolean;
}
const Input = ({
    label,
    size,
    placeholder,
    value,
    type = 'text',
    onChange,
    border,
    required,
}: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="timeInput">{label}</label>
            <input
                type={type}
                id="timeInput"
                className={`${size} px-4 border-2  ${border}`}
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
