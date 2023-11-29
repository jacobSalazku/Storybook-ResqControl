import { TextAreaProps } from '../interfaces';

const InputTextArea = ({
    title,
    width,
    height,
    placeholder,
    border,
    icon,
}: TextAreaProps) => {
    return (
        <div className="flex w-full flex-col justify-center">
            <div className="flex flex-col gap-8 pt-4">
                <div className="flex flex-row items-center gap-4">
                    <div> {icon}</div>
                    <h2 className="text-[24px]">{title} </h2>
                </div>
                <textarea
                    placeholder={placeholder}
                    className={`${height} ${width} ${border} flex flex-col items-start justify-start border-2 border-dark-blue  px-5 py-5 text-left`}
                />
            </div>
        </div>
    );
};

export default InputTextArea;
