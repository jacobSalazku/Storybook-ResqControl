import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import { Button } from './Button';
import { pointArrow } from './helpers';
import { lozenges } from './patientData';
import { TreatmentDashProps } from '../interfaces';

export const TreatmentDash = ({
    title,
    topLeftLogo,
    searchIcon,
}: TreatmentDashProps) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
        <div className="w-full flex flex-row justify-center py-2">
            <div
                className={`w-[55rem] ${
                    show
                        ? 'h-[22rem] transition-max-h transition-opacity duration-300 ease-in-out'
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
                    <div className="w-full h-full flex flex-row flex-wrap justify-between items-center mx-5 gap-5">
                        {lozenges.map((lozenge, index) => (
                            <Button
                                key={index}
                                label={lozenge.name}
                                size="w-44"
                                height="h-10"
                                variant="rounded-full"
                                icon={<IconCheck color="#ffffff" />}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TreatmentDash;
