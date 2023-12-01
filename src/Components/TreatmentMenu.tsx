import { useState } from "react";
import { menuProps } from "../interfaces";

const TreatmentMenu = ({ menuItems, activeTitle }: menuProps) => {
    //active title enkel voor storybook
    const [activeItem, setActiveItem] = useState(menuItems[activeTitle]) || "";

    const activateMenu = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex h-11 w-[58rem] flex-row items-center justify-center gap-8 font-bold">
                {menuItems.map((menuitem, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer border-b-light-blue px-5 py-2 hover:border-b-4 ${
                            activeItem === menuitem ? "border-b-4 border-b-light-blue" : ""
                        }`}
                        onClick={() => activateMenu(menuitem)}
                    >
                        <p>{menuitem}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TreatmentMenu;
