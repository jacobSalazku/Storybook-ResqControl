import { IconSearch } from "@tabler/icons-react";

interface Searchbar {
    borderColor: string;
    borderRadius: string;
    width: number | string;
    height: number | string;
    placeholder?: string;
    iconColor?: string;
}

const Searchbar = ({ borderColor, width, height, placeholder, borderRadius, iconColor }: Searchbar) => {
    return (
        <div className={`relative flex flex-row border-${borderColor} w-[${width}px] h-[${height}px] ${borderRadius} border-2`}>
            <input className={`h-full w-full ${borderRadius} py-2 pl-12 text-[16px]`} type="text" placeholder={placeholder}></input>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 transform">
                <IconSearch color={iconColor} />
            </span>
        </div>
    );
};

export default Searchbar;
