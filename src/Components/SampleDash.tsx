import { useState } from "react";
import { TreatmentDashProps } from "../interfaces";
import InputTextArea from "./InputTextArea";
import { IconChevronDown } from "@tabler/icons-react";

const SampleDash = ({ title, topLeftLogo, searchIcon }: TreatmentDashProps) => {
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
                            <p className="flex flex-row items-center text-[24px] font-medium text-p-text-color">{title}</p>
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
                    } mb-2 mt-4 flex w-full flex-row justify-center rounded-md border-8 border-white`}
                >
                    <div className="flex h-full w-full flex-row flex-wrap items-center justify-between gap-x-1 gap-y-4 px-6">
                        <InputTextArea title="Symptomen" width="w-full" height="h-[127px]" placeholder="Symptomen" border="rounded-2xl" />
                        <InputTextArea title="Allergiën" width="w-full" height="h-[127px]" placeholder="Allergiën" border="rounded-2xl" />
                        <InputTextArea title="Medicatie" width="w-full" height="h-[127px]" placeholder="Medicatie" border="rounded-2xl" />
                        <InputTextArea title="Past Illnes" width="w-full" height="h-[127px]" placeholder="Past Illnes" border="rounded-2xl" />
                        <InputTextArea title="Last Meal" width="w-full" height="h-[127px]" placeholder="Last Meal" border="rounded-2xl" />{" "}
                        <InputTextArea title="Event/Environnment" width="w-full" height="h-[127px]" placeholder="Event/Environnment" border="rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SampleDash;
