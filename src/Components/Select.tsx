import { Menu, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { ArrowDown } from '../stories/helpers/ClientDataFunctions';
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface SelectProps {
    title: string;
    menuItems: string[];
    width: string;
    ringColor: string;
    height: string;
}

const Select = ({
    title,
    menuItems,
    width,
    ringColor,
    height = 'h-8',
}: SelectProps) => {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <>
            <Menu
                as="div"
                className={` ${width} relative inline-block text-left`}
            >
                <div>
                    <Menu.Button
                        className={`flex flex-row w-full justify-between ${height} items-center rounded-full bg-white px-3 py-2 text-base font-medium text-dark-blue ring-2 ring-inset ${ringColor} hover:bg-gray-50`}
                    >
                        <div> {selectedItem ? selectedItem : title}</div>

                        <div>{ArrowDown}</div>
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10  w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {menuItems.map((item) => (
                                <Menu.Item key={item}>
                                    {({ active }) => (
                                        <a
                                            onClick={() => {
                                                setSelectedItem(item);
                                            }}
                                            className={classNames(
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            )}
                                        >
                                            {item}
                                        </a>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default Select;
