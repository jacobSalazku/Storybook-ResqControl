import { TreatmentDashProps } from "../interfaces";
import { useState } from "react";
import { crt, FAST, motoricResponse, OgenArray, Pupillen, verbalResponse, wapaArr } from "./patientData";
import IconButton from "./IconButton";
import { DeleteIcon } from "../stories/helpers/ClientDataFunctions";
import { useInput } from "../Hooks/useInput";
import InputSpan from "./InputSpan";
import { Button } from "./Button";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

type ButtonData = {
    id: number;
    name: string;
    selected: boolean;
};
const ParametersDash = ({ topLeftLogo, title }: TreatmentDashProps) => {
    const breathing = useInput();
    const heartbeat = useInput();
    const saturation = useInput();
    const collectionTime = useInput();
    const highBloodPressure = useInput();
    const lowBloodPressure = useInput();
    const temperature = useInput();
    const glycmie = useInput();

    const [show, setShow] = useState(true);
    const [selectedItem, setSelectedItems] = useState<ButtonData | null>(null);
    const [eyesOptions, setEyesOptions] = useState<ButtonData | null>(null);
    const [verbalResponseOptions, setVerbalResponseOptions] = useState<ButtonData | null>(null);

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
        <div className="flex w-full flex-row justify-center py-2">
            <div
                className={`w-[55rem] ${
                    show ? "transition-max-h h-auto transition-opacity duration-300 ease-in-out" : "h-[4rem]"
                } rounded-b-xl rounded-t-xl border-4 border-background-color`}
            >
                <div className="justify flex h-[3.7rem] w-[54.6rem] flex-row items-center justify-between rounded border-background-color px-5">
                    <div className="ml-2 flex flex-row items-center justify-start gap-4">
                        {topLeftLogo}
                        <div>
                            <p className="flex flex-row items-center text-lg font-medium text-p-text-color">{title}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-7">
                        <div className="cursor-pointer" onClick={toggleShow}>
                            <IconChevronDown className={`transform transition-all ${show ? "-rotate-180" : "rotate-0"}`} />
                        </div>
                    </div>
                </div>
                <div
                    className={`transition-max-h transition-opacity duration-300 ease-in-out ${
                        show ? "-h-[17.rem] opacity-100" : "max-h-0 opacity-0"
                    } my-4  mb-2 flex w-full  flex-col gap-8 px-8`}
                >
                    <div>
                        <h2 className="text font-semibold">GlasCow Coma Schaal</h2>
                        <div className="flex flex-col items-center ">
                            <div className="flex w-full flex-row justify-between pl-2">
                                <div>
                                    <div className="py-4 pl-2">
                                        <h2>Openen van ogen</h2>
                                    </div>
                                    <div className="flex flex-col gap-2 ">
                                        {OgenArray.map((ogen) => (
                                            <div key={ogen.id}>
                                                <Button
                                                    backgroundColor="bg-white"
                                                    size="h-[40px] px-4"
                                                    variant="rounded-full"
                                                    label={ogen.name}
                                                    onClick={() => HandleEyesOptions(ogen)}
                                                    icon={<IconCheck color="#FFFFFF" />}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {eyesOptions ? <p>{eyesOptions.name}</p> : <p>No item selected</p>}
                                    </div>
                                </div>
                                <div>
                                    <div className="py-4">
                                        <h2> Verbaal Antwoord</h2>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {verbalResponse.map((response) => (
                                            <div key={response.id}>
                                                <button className={"h-[40px] rounded-full border-2 px-4"} onClick={() => HandleVerbalOptions(response)}>
                                                    {response.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {verbalResponseOptions ? <p>{verbalResponseOptions.name}</p> : <p>No item selected</p>}
                                    </div>
                                </div>
                                <div>
                                    <div className="py-4 pl-2">
                                        <h2>Motorisch Antwoord</h2>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {motoricResponse.map((motoricResponse) => (
                                            <div key={motoricResponse.id}>
                                                <button className={`h-[40px] rounded-full border-2 px-4`} onClick={() => handleItemClick(motoricResponse)}>
                                                    {motoricResponse.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>Selected Item:</h3>
                                        {selectedItem ? <p>{selectedItem.name}</p> : <p>No item selected</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {" "}
                                <h2>Motorisch Antwoord</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {wapaArr.map((wapaItem) => (
                                        <div key={wapaItem.id}>
                                            <button className="h-[40px] rounded-full border-2 px-4" onClick={() => handleItemClick(wapaItem)}>
                                                {wapaItem.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {" "}
                                <h2>Fast</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {FAST.map((item) => (
                                        <div key={item.id}>
                                            <button className="h-[40px] rounded-full border-2 px-4" onClick={() => handleItemClick(item)}>
                                                {item.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {" "}
                                <h2>Pupillen</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {Pupillen.map((item) => (
                                        <div key={item.id}>
                                            <button className="h-[40px] rounded-full border-2 px-4" onClick={() => handleItemClick(item)}>
                                                {item.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pl-2 pt-8">
                            {" "}
                            <InputSpan
                                label="Ademhaling"
                                size="h-[40px] w-full"
                                type="number"
                                value={breathing.value}
                                onChange={breathing.onChange}
                                spanString="/min"
                            />
                            <InputSpan
                                label="Hartslag"
                                size="h-[40px] w-full"
                                type="number"
                                value={heartbeat.value}
                                onChange={heartbeat.onChange}
                                spanString="BPM"
                            />
                        </div>
                        <div className="mt-6 ">
                            <div className="py-4 pl-2">
                                {" "}
                                <h2>Pupillen</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {crt.map((crtItem) => (
                                        <div key={crtItem.id}>
                                            <button className="h-[40px] rounded-full border-2 px-4" onClick={() => handleItemClick(crtItem)}>
                                                {crtItem.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pl-2 pt-8">
                                {" "}
                                <InputSpan
                                    label="spO2"
                                    size="h-[40px] w-full"
                                    type="number"
                                    value={saturation.value}
                                    onChange={saturation.onChange}
                                    spanString="%"
                                />
                            </div>
                            <div className="pl-2 pt-8">
                                {" "}
                                <InputSpan
                                    label="Temperatuur"
                                    size="h-[40px] w-full"
                                    type="number"
                                    spanString="°C"
                                    value={temperature.value}
                                    onChange={temperature.onChange}
                                />
                            </div>
                            <div className="pl-2 pt-8">
                                {" "}
                                <InputSpan
                                    label="Glycemie"
                                    size="h-[40px] w-full"
                                    type="number"
                                    spanString="mg/dl"
                                    value={glycmie.value}
                                    onChange={glycmie.onChange}
                                />
                            </div>
                            <div className="pl-2 pt-8">
                                <label htmlFor="timeInput">Bloeddruk</label>{" "}
                                <div>
                                    <input
                                        type="number"
                                        className="mt-4 w-1/2 border-2 px-4"
                                        placeholder="Hoog( mm Hg)"
                                        value={highBloodPressure.value}
                                        onChange={highBloodPressure.onChange}
                                    />
                                    <input
                                        type="number"
                                        className="mt-4 w-1/2 border-2 px-4"
                                        placeholder="Laag( mm Hg)"
                                        value={lowBloodPressure.value}
                                        onChange={lowBloodPressure.onChange}
                                    />
                                </div>
                            </div>
                            <div className="pl-2 pt-8">
                                {" "}
                                <InputSpan label="Pijnscore" size="h-[40px] w-full" placeholder="sVas(1-10)" type="number" spanString="sVas(1-10)" />
                            </div>
                            <div className="flex w-full flex-row justify-between pl-2 pt-8">
                                {" "}
                                <InputSpan
                                    label="Tijdstip van Afname"
                                    size="h-[40px] w-[270px]"
                                    type="time"
                                    value={collectionTime.value}
                                    onChange={collectionTime.onChange}
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
