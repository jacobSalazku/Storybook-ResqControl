import { TreatmentDashProps } from '../interfaces';
import { useState } from 'react';
import { pointArrow } from './helpers';

const ObservationDash = ({ topLeftLogo, title }: TreatmentDashProps) => {
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
                    } w-full  mb-2 flex flex-col  my-4 px-8`}
                >
                    <textarea
                        placeholder="Opmerkingen"
                        className="w-full h-[205px]  flex flex-col justify-start items-start border-dark-blue border-2 rounded-lg px-5 py-5 text-left"
                    />
                </div>
            </div>
        </div>
    );
};

export default ObservationDash;
