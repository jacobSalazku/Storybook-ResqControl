interface labelProps {
    label: string;
    templateStr?: string;
    size: string;
    placeholder: string;
}
const InputDefaultVal = ({ label, size, placeholder }: labelProps) => {
    /*
  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (inputValue === '') {
      setInputValue('/min');
    }
  };
*/
    return (
        <div>
            <label htmlFor="timeInput">{label}</label>
            <input
                type="text"
                id="timeInput"
                className={`${size} px-4 border-2 mt-4`}
                placeholder={placeholder}
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
