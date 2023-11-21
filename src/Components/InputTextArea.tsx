import { TextAreaProps } from '../interfaces';

const InputTextArea = ({
    title,
    width,
    height,
    placeholder,
    border,
}: TextAreaProps) => {
    return (
        <div className="w-full flex flex-col gap-6">
            <h2 className="font-semibold">{title} </h2>
            <textarea
                placeholder={placeholder}
                className={`${height} ${width} ${border} flex flex-col justify-start items-start border-dark-blue border-2  px-5 py-5 text-left`}
            />
        </div>
    );
};

export default InputTextArea;
