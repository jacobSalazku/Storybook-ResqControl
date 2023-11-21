import { TreatmentDashProps } from '../interfaces';
import { useState } from 'react';
import { pointArrow } from './helpers';
import {
    FAST,
    motoricResponse,
    OgenArray,
    Pupillen,
    verbalResponse,
    wapaArr,
} from './patientData';
import InputDefaultVal from './inputDefaultVal';

const ObservationDash = ({ topLeftLogo, title }: TreatmentDashProps) => {
    const [show, setShow] = useState(true);
    const [selectedItem, setSelectedItem] = useState<{
        id: number;
        name: string;
        selected: boolean;
    } | null>(null);
    const toggleShow = () => setShow(!show);

    const handleItemClick = (item: {
        id: number;
        name: string;
        selected: boolean;
    }) => {
        // Update the state to the selected item
        setSelectedItem(item);
    };
    return (
        <div className="w-full flex flex-row justify-center py-2">
            <div
                className={`w-[55rem] ${
                    show
                        ? 'h-auto transition-max-h transition-opacity duration-300 ease-in-out'
                        : 'h-[4rem]'
                } rounded-b-xl rounded-t-xl border-4 border-background-color`}
            >
                <div className="w-[54.6rem] h-[3.7rem] flex flex-row justify justify-between border-background-color px-5 items-center rounded">
                    <div className="flex flex-row justify-start items-center gap-4 ml-2">
                        {topLeftLogo}
                        <div>
                            <p className="text-lg text-p-text-color flex flex-row items-center font-medium">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-7">
                        <div className="cursor-pointer" onClick={toggleShow}>
                            {pointArrow(show)}
                        </div>
                    </div>
                </div>
                <div
                    className={`transition-max-h transition-opacity duration-300 ease-in-out ${
                        show ? '-h-[17.rem] opacity-100' : 'max-h-0 opacity-0'
                    } w-full  mb-2 flex flex-col  my-4 px-8 gap-8`}
                >
                    <div>
                        <h2 className="font-semibold text">
                            GlasCow Coma Schaal
                        </h2>
                        <div className="flex flex-col items-center ">
                            <div className=" w-full flex flex-row justify-between">
                                <div>
                                    <div className="py-4 pl-2">
                                        <h2>Openen van ogen</h2>
                                    </div>
                                    <div className="flex flex-col gap-2 ">
                                        {OgenArray.map((item) => (
                                            <div key={item.id}>
                                                <button
                                                    className="px-4 h-[40px] rounded-full border-2 g"
                                                    onClick={() =>
                                                        handleItemClick(item)
                                                    }
                                                >
                                                    {item.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {selectedItem ? (
                                            <p>{selectedItem.name}</p>
                                        ) : (
                                            <p>No item selected</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="py-4">
                                        <h2> Verbaal Antwoord</h2>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {verbalResponse.map((item) => (
                                            <div key={item.id}>
                                                <button
                                                    className="px-4 h-[40px] rounded-full border-2"
                                                    onClick={() =>
                                                        handleItemClick(item)
                                                    }
                                                >
                                                    {item.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {selectedItem ? (
                                            <p>{selectedItem.name}</p>
                                        ) : (
                                            <p>No item selected</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="py-4">
                                        <h2>Motorisch Antwoord</h2>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {motoricResponse.map((item) => (
                                            <div key={item.id}>
                                                <button
                                                    className="px-4 h-[40px] rounded-full border-2"
                                                    onClick={() =>
                                                        handleItemClick(item)
                                                    }
                                                >
                                                    {item.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {selectedItem ? (
                                            <p>{selectedItem.name}</p>
                                        ) : (
                                            <p>No item selected</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>Motorisch Antwoord</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {wapaArr.map((item) => (
                                        <div key={item.id}>
                                            <button
                                                className="px-4 h-[40px] rounded-full border-2"
                                                onClick={() =>
                                                    handleItemClick(item)
                                                }
                                            >
                                                {item.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>Fast</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {FAST.map((item) => (
                                        <div key={item.id}>
                                            <button
                                                className="px-4 h-[40px] rounded-full border-2"
                                                onClick={() =>
                                                    handleItemClick(item)
                                                }
                                            >
                                                {item.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>Pupillen</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {Pupillen.map((item) => (
                                        <div key={item.id}>
                                            <button
                                                className="px-4 h-[40px] rounded-full border-2"
                                                onClick={() =>
                                                    handleItemClick(item)
                                                }
                                            >
                                                {item.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 pl-2">
                            {' '}
                            <InputDefaultVal
                                label="Ademhaling"
                                size="h-[40px] w-full"
                                placeholder="/min"
                            />
                        </div>
                        <div className="pt-8 pl-2">
                            {' '}
                            <InputDefaultVal
                                label="Hartslag"
                                size="h-[40px] w-full"
                                placeholder="BPM"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObservationDash;
