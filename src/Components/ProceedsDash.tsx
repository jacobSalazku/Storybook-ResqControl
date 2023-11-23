import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import { Button } from './Button';
import { pointArrow } from './helpers';
import { TreatmentDashProps } from '../interfaces';
import { proceedsArr } from './patientData';
import IconButton from './IconButton';
import { DeleteIcon } from '../stories/helpers/ClientDataFunctions';
import { stringTime } from '../stories/helpers/DateTime';
import Input from './Input';

const ProceedsDash = ({
    title,
    topLeftLogo,
    searchIcon,
}: TreatmentDashProps) => {
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
                        <div>{searchIcon}</div>
                        <div className="cursor-pointer" onClick={toggleShow}>
                            {pointArrow(show)}
                        </div>
                    </div>
                </div>
                <div
                    className={`transition-max-h transition-opacity duration-300 ease-in-out ${
                        show ? '-h-[17.rem] opacity-100' : 'max-h-0 opacity-0'
                    } w-full border-8 border-white rounded-md mb-2 flex flex-col justify-center mt-4`}
                >
                    <div className="w-full h-full flex flex-row flex-wrap justify-between items-center px-6 gap-x-1 gap-y-4">
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
                    <div className="w-full flex flex-row pt-8 pl-2 justify-between">
                        {' '}
                        <Input
                            label="Tijdstip van Afname"
                            size="h-[40px] w-[270px]"
                            placeholder={stringTime}
                            type="time"
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
    );
};
export default ProceedsDash;
