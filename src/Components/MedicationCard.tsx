import { IconCalendarEvent, IconClockHour4 } from '@tabler/icons-react';
import { ChangeEvent, useState } from 'react';
import Select from './Select';
const toedining = ['oraal', 'Intraveneus', 'intramusculair', 'subcutaan'];

interface MedicationData {
    time: string;
    date: string;
    dosis: string;
    toedining: string;
}

const MedicationCard = () => {
    const [medicationData, setMedicationData] = useState<MedicationData>({
        time: '',
        date: '',
        dosis: '',
        toedining: '',
    });

    const handleInputChange = (field: keyof MedicationData, value: string) => {
        setMedicationData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <>
            <div className=" relative w-[245px] h-[450px] border-2 border-dark-blue rounded-3xl pt-5">
                {/** <div className=" w-[17rem] h-4 flex flex-row justify-end absolute mb-1 top-0 right-4">
                    <IconButton
                        icon={DeleteIcon}
                        size="w-12"
                        variant="rounded-full"
                        backgroundColor="bg-[#EE7E7A] border-dark-blue"
                    />
                </div>
            */}
                <div className="flex flex-col px-4">
                    <div className="w-full h-full flex flex-row items-center justify-center ">
                        <div className="w-full flex flex-col justify-center items-center text-dark-blue gap-2 border-b-2 border-dark-blue pb-4">
                            <div>
                                <p className="text-lg font-semibold">
                                    Adrenaline
                                </p>
                            </div>
                            <div>
                                <p className="text-[#d3d3d3]">Epinefrine</p>
                            </div>
                            <div>
                                <p className="text-[#d3d3d3]">&mg/1ml</p>
                            </div>
                            <div>
                                <p className="text-[#d3d3d3]">Amp</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-row justify-center pt-4">
                        <div className="w-full flex flex-col justify-center items-center text-dark-blue gap-4">
                            <div className="flex flex-col items-start gap-2 pl-1">
                                <div className="flex flex-row gap-2 justify-start items-center relative">
                                    <IconClockHour4
                                        color="#497DAE"
                                        className="absolute flex items-center pl-4"
                                        size={40}
                                    />
                                    <input
                                        className="w-[210px] h-[55px] border-2 rounded-full border-dark-blue flex flex-row justify-center px-10"
                                        type="time"
                                        value={medicationData.time}
                                        onChange={(
                                            e: ChangeEvent<HTMLInputElement>,
                                        ) =>
                                            handleInputChange(
                                                'time',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-row gap-2 justify-start items-center relative">
                                    <IconCalendarEvent
                                        color="#497DAE"
                                        className="absolute flex items-center pl-4"
                                        size={40}
                                    />
                                    <input
                                        title="Dosis"
                                        type="date"
                                        className="w-[210px] h-[55px] border-2 rounded-full border-dark-blue flex flex-row justify-center px-10"
                                        value={medicationData.date}
                                        onChange={(
                                            e: ChangeEvent<HTMLInputElement>,
                                        ) =>
                                            handleInputChange(
                                                'date',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <input
                                        className="border-2 h-[55px] w-[210px] rounded-full border-dark-blue px-2"
                                        type="text"
                                        placeholder="Dosis"
                                        value={medicationData.dosis}
                                        onChange={(
                                            e: ChangeEvent<HTMLInputElement>,
                                        ) =>
                                            handleInputChange(
                                                'dosis',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <Select
                                        title="Toedening"
                                        menuItems={...toedining}
                                        ringColor="ring-dark-blue"
                                        height="h-[55px]"
                                        width="w-[210px]"
                                        /* value={medicationData.toedining}
                                        onChange={(value: string) =>
                                            handleInputChange(
                                                'toedining',
                                                value,
                                            )
                                        }
                                        */
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MedicationCard;
