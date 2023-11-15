import '../index.css';
import { IconButtonProps } from './IconButton';

/** Primary button for our user interface  without text only Icons */
const IconButtonLogoRight = ({
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
            className={`${size} ${backgroundColor} ${hover}   py-2 px-2 flex flex-row h-12 items-center justify-center border-2 ${variant} cursor-pointer text-sm ease-in-out font-medium gap-2  transition duration-300 ease-in-out${
                selected ? 'border-p-blue' : ''
            }`}
        >
            {label} {icon}
        </button>
    );
};
export default IconButtonLogoRight;
