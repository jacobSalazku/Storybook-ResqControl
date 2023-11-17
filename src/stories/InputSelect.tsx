import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, Fragment } from 'react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface InputSelectProps {
    title?: string;
    menuItems: string[];
    backgroundColor?: string;
    arrowColor?: string;
    textColor?: string;
}

const InputSelect = ({
    title,
    menuItems,
    backgroundColor = 'bg-white',
    arrowColor = 'dark-blue',
    textColor,
}: InputSelectProps) => {
    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className={`inline-flex w-full justify-centert ${textColor} gap-x-1.5 rounded-full ${backgroundColor}  px-4 py-2 text-sm font-semibold text-gray-900 ring-2 ring-inset ring-light-blue`}
                    >
                        {selectedItem ? selectedItem : title}
                        <ChevronDownIcon
                            className={`mr-1 h-5 w-5 text-${arrowColor}`}
                            aria-hidden="true"
                        />
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
                    <Menu.Items className="absolute right-0 z-10  w-full origin-top-right rounded-md  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

export default InputSelect;
