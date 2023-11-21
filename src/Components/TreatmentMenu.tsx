import { useState } from 'react';
import { menuProps } from '../interfaces';

const TreatmentMenu = ({ menuItems, activeTitle }: menuProps) => {
    const [activeItem, setActiveItem] = useState(menuItems[activeTitle]) || '';

    const activateMenu = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-[58rem] h-11 flex flex-row justify-center items-center font-bold gap-8">
                {menuItems.map((menuitem, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer hover:border-b-4 border-b-light-blue px-5 py-2 ${
                            activeItem === menuitem
                                ? 'border-b-light-blue border-b-4'
                                : ''
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
