import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "./Button";
import { TreatmentDashProps } from "../interfaces";
import { proceedsArr } from "./patientData";
import IconButton from "./IconButton";
import { DeleteIcon } from "../stories/helpers/ClientDataFunctions";
import { stringTime } from "../stories/helpers/DateTime";
import Input from "./Input";

const ProceedsDash = ({ title, topLeftLogo, searchIcon }: TreatmentDashProps) => {
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

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
                        <div>{searchIcon}</div>
                        <div className="cursor-pointer" onClick={toggleShow}>
                            <IconChevronDown className={`transform transition-all ${show ? "-rotate-180" : "rotate-0"}`} />
                        </div>
                    </div>
                </div>
                <div
                    className={`transition-max-h transition-opacity duration-300 ease-in-out ${
                        show ? "-h-[17.rem] opacity-100" : "max-h-0 opacity-0"
                    } mb-2 mt-4 flex w-full flex-col justify-center rounded-md border-8 border-white`}
                >
                    <div className="flex h-full w-full flex-row flex-wrap items-center justify-between gap-x-1 gap-y-4 px-6">
                        {proceedsArr.map((item, index) => (
                            <Button
                                key={index}
                                label={item}
                                size="px-8"
                                height="h-10"
                                variant="rounded-full"
                                icon={<IconCheck color="#ffffff" />}
                                backgroundColor=" border-2 border-dark-blue"
                            />
                        ))}
                    </div>
                    <div className="flex w-full flex-row justify-between pl-2 pt-8">
                        {" "}
                        <Input label="Tijdstip van Afname" size="h-[40px] w-[270px]" placeholder={stringTime} type="time" />
                        <div className="flex flex-row items-end justify-end">
                            <IconButton icon={DeleteIcon} variant="rounded" size="w-[132px] h-[44px]" backgroundColor="bg-p-red text-white border-p-red" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProceedsDash;
