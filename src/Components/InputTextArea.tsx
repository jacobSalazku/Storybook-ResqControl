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
        <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col gap-8 pt-4">
                <div className="flex flex-row gap-4 items-center">
                    <div> {icon}</div>
                    <h2 className="text-[24px]">{title} </h2>
                </div>
                <textarea
                    placeholder={placeholder}
                    className={`${height} ${width} ${border} flex flex-col justify-start items-start border-dark-blue border-2  px-5 py-5 text-left`}
                />
            </div>
        </div>
    );
};

export default InputTextArea;
