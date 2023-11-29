import MenuItem from './MenuItem';
import { useState } from 'react';
import {
    IconArmchair,
    IconCheck,
    IconRefresh,
    IconReport,
} from '@tabler/icons-react';

const Menu = () => {
    const [select, setSelect] = useState(0);

    const handleSelection = (index: number) => {
        setSelect(index);
    };
    const activeNavIcon = (index: number) =>
        select == index ? '#F6F8FF' : '#497DAE';
    const activeNav = (index: number) =>
        select == index ? selectedStyle : bgColor;

    const bgColor = 'bg-background-color ';
    const selectedStyle =
        'transition ease-in-out delay-50 bg-[#35393C] text-white shadow-lg font-light';
    const navTitles = [
        'Wachtzaal Inschirjvingen',
        'WachtZaal PreReg',
        'WachtZaal Triage',
        'In Behnadeling',
    ];

    return (
        <div className="my-1 flex w-full flex-row items-center justify-center gap-3 ">
            <MenuItem
                title={navTitles[0]}
                icon={<IconArmchair color={activeNavIcon(0)} />}
                backgroundColor={activeNav(0)}
                onClick={() => handleSelection(0)}
            />

            <MenuItem
                title={navTitles[1]}
                icon={<IconReport color={activeNavIcon(1)} />}
                backgroundColor={activeNav(1)}
                onClick={() => handleSelection(1)}
            />

            <MenuItem
                title={navTitles[2]}
                icon={<IconRefresh color={activeNavIcon(2)} />}
                backgroundColor={activeNav(2)}
                onClick={() => handleSelection(2)}
            />

            <MenuItem
                title={navTitles[3]}
                icon={<IconCheck color={activeNavIcon(3)} />}
                backgroundColor={activeNav(3)}
                onClick={() => handleSelection(3)}
            />
        </div>
    );
};

export default Menu;
