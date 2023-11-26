import { TreatmentDashProps } from '../interfaces';
import { useState } from 'react';
import { pointArrow } from './helpers';
import {
    crt,
    FAST,
    motoricResponse,
    OgenArray,
    Pupillen,
    verbalResponse,
    wapaArr,
} from './patientData';
import IconButton from './IconButton';
import { DeleteIcon } from '../stories/helpers/ClientDataFunctions';
import Input from './Input';

type ButtonData = {
    id: number;
    name: string;
    selected: boolean;
};
const  ParametersDash = ({ topLeftLogo, title }: TreatmentDashProps) => {

    const [show, setShow] = useState(true);
    const [selectedItem, setSelectedItems] = useState<ButtonData | null>(null);
    const [eyesOptions, setEyesOptions] = useState<ButtonData | null>(null);
    const [verbalResponseOptions, setVerbalResponseOptions] =
        useState<ButtonData | null>(null);

    const [isSelected, setIsSelected] = useState(false);


    
    const toggleShow = () => setShow(!show);

    const HandleEyesOptions = (item: ButtonData) => {
        // Update the state to the selected item
        setEyesOptions(item);
        setIsSelected(!isSelected);
    };

    const HandleVerbalOptions = (item: ButtonData) => {
        // Update the state to the selected item
        setVerbalResponseOptions(item);
    };

    const handleItemClick = (item: ButtonData) => {
        // Update the state to the selected item
        setSelectedItems(item);
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
                            <div className="w-full flex flex-row justify-between pl-2">
                                <div>
                                    <div className="py-4 pl-2">
                                        <h2>Openen van ogen</h2>
                                    </div>
                                    <div className="flex flex-col gap-2 ">
                                        {OgenArray.map((ogen) => (
                                            <div key={ogen.id}>
                                                <button
                                                    className="px-4 h-[40px] rounded-full border-2 g"
                                                    onClick={() =>
                                                        HandleEyesOptions(ogen)
                                                    }
                                                >
                                                    {ogen.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {eyesOptions ? (
                                            <p>{eyesOptions.name}</p>
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
                                       
                                       
                                        {verbalResponse.map((response) => (
                                            <div key={response.id}>
                                                 <label >  {response.name} </label>
                                                    <input type="option" value={response.name} />
                                                <button
                                                    className={"px-4 h-[40px] rounded-full border-2"}
                                                    onClick={() =>
                                                        HandleVerbalOptions(
                                                            response,
                                                        )
                                                    }
                                                >
                                                    {response.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {verbalResponseOptions ? (
                                            <p>{verbalResponseOptions.name}</p>
                                        ) : (
                                            <p>No item selected</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="py-4 pl-2">
                                        <h2>Motorisch Antwoord</h2>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {motoricResponse.map(
                                            (motoricResponse) => (
                                                <div key={motoricResponse.id}>
                                                    <button
                                                        className="px-4 h-[40px] rounded-full border-2"
                                                        onClick={() =>
                                                            handleItemClick(
                                                                motoricResponse,
                                                            )
                                                        }
                                                    >
                                                        {motoricResponse.name}
                                                    </button>
                                                </div>
                                            ),
                                        )}
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
                                    {wapaArr.map((wapaItem) => (
                                        <div key={wapaItem.id}>
                                            <button
                                                className="px-4 h-[40px] rounded-full border-2"
                                                onClick={() =>
                                                    handleItemClick(wapaItem)
                                                }
                                            >
                                                {wapaItem.name}
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
                        </div>}

                        <div className="pt-8 pl-2">
                            {' '}
                            <Input
                                label="Ademhaling"
                                size="h-[40px] w-full"
                                placeholder="/min"
                                type="tex"
                            />
                        </div>
                        <div className="pt-8 pl-2">
                            {' '}
                            <Input
                                label="Hartslag"
                                size="h-[40px] w-full"
                                placeholder="BPM"
                                type="tex"
                            />
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>Pupillen</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {crt.map((crtItem) => (
                                        <div key={crtItem.id}>
                                            <button
                                                className="px-4 h-[40px] rounded-full border-2"
                                                onClick={() =>
                                                    handleItemClick(crtItem)
                                                }
                                            >
                                                {crtItem.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-8 pl-2">
                                {' '}
                                <Input
                                    label="spO2"
                                    size="h-[40px] w-full"
                                    placeholder="%"
                                    type="tex"
                                />
                            </div>
                            <div className="pt-8 pl-2">
                                {' '}
                                <Input
                                    label="Temperatuur"
                                    size="h-[40px] w-full"
                                    placeholder="°C"
                                    type="tex"
                                />
                            </div>
                            <div className="pt-8 pl-2">
                                {' '}
                                <Input
                                    label="Glycemie"
                                    size="h-[40px] w-full"
                                    placeholder="mg/dl"
                                    type="tex"
                                />
                            </div>
                            <div className="pt-8 pl-2">
                                <label htmlFor="timeInput">Bloeddruk</label>{' '}
                                <div>
                                    <input
                                        type="text"
                                        className="w-1/2 px-4 border-2 mt-4"
                                        placeholder="Hoog( mm Hg)"
                                    />
                                    <input
                                        type="text"
                                        className="w-1/2 px-4 border-2 mt-4"
                                        placeholder="Laag( mm Hg)"
                                    />
                                </div>
                            </div>
                            <div className="pt-8 pl-2">
                                {' '}
                                <Input
                                    label="Pijnscore"
                                    size="h-[40px] w-full"
                                    placeholder="sVas(1-10)"
                                    type="tex"
                                />
                            </div>
                            <div className="w-full flex flex-row pt-8 pl-2 justify-between">
                                {' '}
                                <Input
                                    label="Tijdstip van Afname"
                                    size="h-[40px] w-[270px]"
                                    placeholder="Vas(1-10)"
                                    type="tex"
                                />
                                <div className="flex flex-row items-end justify-end">
                                    <IconButton
                                        icon={DeleteIcon}
                                        variant="rounded"
                                        size="w-[132px] h-[44px]"
                                        backgroundColor="bg-p-red text-white border-p-red"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParametersDash;
