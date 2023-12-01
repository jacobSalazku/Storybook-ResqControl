import { MenuItemProps } from "../interfaces";

const MenuItem = ({ onClick, backgroundColor, title, icon }: MenuItemProps) => {
    return (
        <div className={`h-[6rem] w-full cursor-pointer rounded px-2 shadow-lg md:h-[3rem] ${backgroundColor} `} onClick={onClick}>
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 sm:flex-row sm:gap-2">
                <div>{icon}</div>
                <h1 className="hidden text-base font-light md:flex">{title}</h1>
                <h1 className="text-base font-light md:hidden">{title.split(" ")[1]}</h1>
            </div>
        </div>
    );
};

export default MenuItem;
