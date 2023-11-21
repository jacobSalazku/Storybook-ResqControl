import { useState } from 'react';
import { pointArrow } from './helpers';
import { TreatmentDashProps } from '../interfaces';
import InputTextArea from './InputTextArea';

const SampleDash = ({ title, topLeftLogo, searchIcon }: TreatmentDashProps) => {
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

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
                            <p className="text-[24px] text-p-text-color flex flex-row items-center font-medium">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-7">
                        <div>{searchIcon}</div>
                        <div className="cursor-pointer" onClick={toggleShow}>
                            {pointArrow(show)}
                        </div>
                    </div>
                </div>
                <div
                    className={`transition-max-h transition-opacity duration-300 ease-in-out ${
                        show ? '-h-[17.rem] opacity-100' : 'max-h-0 opacity-0'
                    } w-full border-8 border-white rounded-md mb-2 flex flex-row justify-center mt-4`}
                >
                    <div className="w-full h-full flex flex-row flex-wrap justify-between items-center px-6 gap-x-1 gap-y-4">
                        <InputTextArea
                            title="Symptomen"
                            width="w-full"
                            height="h-[127px]"
                            placeholder="Symptomen"
                            border="rounded-2xl"
                        />
                        <InputTextArea
                            title="Allergiën"
                            width="w-full"
                            height="h-[127px]"
                            placeholder="Allergiën"
                            border="rounded-2xl"
                        />
                        <InputTextArea
                            title="Medicatie"
                            width="w-full"
                            height="h-[127px]"
                            placeholder="Medicatie"
                            border="rounded-2xl"
                        />
                        <InputTextArea
                            title="Past Illnes"
                            width="w-full"
                            height="h-[127px]"
                            placeholder="Past Illnes"
                            border="rounded-2xl"
                        />
                        <InputTextArea
                            title="Last Meal"
                            width="w-full"
                            height="h-[127px]"
                            placeholder="Last Meal"
                            border="rounded-2xl"
                        />{' '}
                        <InputTextArea
                            title="Event/Environnment"
                            width="w-full"
                            height="h-[127px]"
                            placeholder="Event/Environnment"
                            border="rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SampleDash;
