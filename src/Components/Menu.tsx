import Icon from './icon';
import MenuItem from './MenuItem';
import { useState } from 'react';

const Menu = () => {
    const [select, setSelect] = useState(0);

    const handleSelection = (index: number) => {
        setSelect(index);
    };

    const selectedStyle =
        'transition ease-in-out delay-50 bg-[#35393C] text-white shadow-lg font-light';
    const navTitles = [
        'Wachtzaal Inschirjvingen',
        'WachtZaal PreReg',
        'WachtZaal Triage',
        'In Behnadeling',
    ];

    return (
        <div className="w-full  flex flex-row justify-center items-center gap-3 my-1 ">
            <MenuItem
                title={navTitles[0]}
                icon={
                    <Icon
                        icon="icon-tabler-armchair"
                        color={select == 0 ? '#F6F8FF' : '#263B54'}
                        path={
                            <>
                                <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
                                <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
                                <path d="M6 19v2" />
                                <path d="M18 19v2" />
                            </>
                        }
                    />
                }
                border={select == 0 ? ' shadow-md shadow-p-grey ' : 'r'}
                backgroundColor={
                    select == 0 ? selectedStyle : ' bg-background-color '
                }
                onClick={() => handleSelection(0)}
            />

            <MenuItem
                title={navTitles[1]}
                icon={
                    <Icon
                        icon="icon-tabler-report"
                        color={select == 1 ? '#F6F8FF' : '#497DAE'}
                        path={
                            <>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
                                <path d="M18 14v4h4" />
                                <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
                                <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M8 11h4" />
                                <path d="M8 15h3" />
                            </>
                        }
                    />
                }
                border={
                    select == 1
                        ? 'rounded-lg shadow-md shadow-p-grey '
                        : 'rounded-[1.8rem]'
                }
                backgroundColor={
                    select == 1 ? selectedStyle : 'bg-background-color '
                }
                onClick={() => handleSelection(1)}
            />

            <MenuItem
                title={navTitles[2]}
                icon={
                    <Icon
                        icon="icon-tabler-refresh"
                        color={select == 2 ? '#F6F8FF' : '#497DAE'}
                        path={
                            <>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                            </>
                        }
                    />
                }
                backgroundColor={
                    select == 2 ? selectedStyle : ' bg-background-color '
                }
                border={
                    select == 2
                        ? 'rounded-lg shadow-md shadow-p-grey '
                        : 'rounded-[1.8rem]'
                }
                onClick={() => handleSelection(2)}
            />

            <MenuItem
                title={navTitles[3]}
                icon={
                    <Icon
                        icon="icon-tabler-check"
                        color={select == 3 ? '#F6F8FF' : '#497DAE'}
                        path={
                            <>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M5 12l5 5l10 -10" />
                            </>
                        }
                    />
                }
                backgroundColor={
                    select == 3 ? selectedStyle : ' bg-background-color '
                }
                border={
                    select == 2
                        ? 'rounded-lg shadow-md shadow-p-grey '
                        : 'rounded-[1.8rem]'
                }
                onClick={() => handleSelection(3)}
            />
        </div>
    );
};

export default Menu;
