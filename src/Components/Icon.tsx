import { iconProps } from '../interfaces';
const Icon = ({
    width = '22',
    height = '22',
    color,
    icon,
    path,
}: iconProps) => {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`icon icon-tabler ${icon}`}
                width={width}
                height={height}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke={color}
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                {path}
            </svg>
        </div>
    );
};

export default Icon;
