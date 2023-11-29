import { TreatmentDashProps } from '../interfaces';
import { useState } from 'react';
import { pointArrow } from './helpers';

const ObservationDash = ({ topLeftLogo, title }: TreatmentDashProps) => {
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);
    return (
        <div className="flex w-full flex-row justify-center py-2">
            <div
                className={`w-[55rem] ${
                    show
                        ? 'transition-max-h h-auto transition-opacity duration-300 ease-in-out'
                        : 'h-[4rem]'
                } rounded-b-xl rounded-t-xl border-4 border-background-color`}
            >
                <div className="justify flex h-[3.7rem] w-[54.6rem] flex-row items-center justify-between rounded border-background-color px-5">
                    <div className="ml-2 flex flex-row items-center justify-start gap-4">
                        {topLeftLogo}
                        <div>
                            <p className="flex flex-row items-center text-lg font-medium text-p-text-color">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-7">
                        <div className="cursor-pointer" onClick={toggleShow}>
                            {pointArrow(show)}
                        </div>
                    </div>
                </div>
                <div
                    className={`transition-max-h transition-opacity duration-300 ease-in-out ${
                        show ? '-h-[17.rem] opacity-100' : 'max-h-0 opacity-0'
                    } my-4  mb-2 flex w-full  flex-col px-8`}
                >
                    <textarea
                        placeholder="Opmerkingen"
                        className="flex h-[205px] w-full flex-col items-start justify-start rounded-lg border-2 border-dark-blue px-5 py-5 text-left"
                    />
                </div>
            </div>
        </div>
    );
};

export default ObservationDash;
