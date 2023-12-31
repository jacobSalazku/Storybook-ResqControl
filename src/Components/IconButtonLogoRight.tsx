import '../index.css';
import { IconButtonProps } from '../interfaces';

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
            className={`${size} ${backgroundColor} ${hover} flex  h-12 flex-row items-center justify-center border-2 py-2 ${variant} cursor-pointer gap-2 text-sm font-medium transition duration-300 ease-in-out
            ${selected ? 'border-p-blue' : ''}`}
        >
            {label} {icon}
        </button>
    );
};
export default IconButtonLogoRight;
