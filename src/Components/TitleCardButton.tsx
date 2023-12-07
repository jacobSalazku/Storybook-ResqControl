import { IconButtonProps } from '../interfaces';

const TitleCardButton = ({
    label,
    selected,
    icon,
    size,
    backgroundColor,
    variant,
    hover,
}: IconButtonProps) => {
    return (
        <button
            className={`${size} ${backgroundColor} ${hover} flex h-12 flex-row items-center justify-center border-2 px-2 py-2 ${variant} cursor-pointer gap-2 text-sm font-medium transition duration-300 ease-in-out
            ${selected ? 'border-p-blue' : ''}`}
        >
            <div className="hidden md:flex">{label} </div>
            <div>{icon}</div>
        </button>
    );
};
export default TitleCardButton;
