import { IconCalendarEvent, IconClockHour4 } from "@tabler/icons-react";
import { ChangeEvent, useState } from "react";
import InputSelect from "./InputSelect";
const toedining = ["oraal", "Intraveneus", "intramusculair", "subcutaan"];

interface MedicationData {
    time: string;
    date: string;
    dosis: string;
    toedining: string;
}

const MedicationCard = () => {
    const [medicationData, setMedicationData] = useState<MedicationData>({
        time: "",
        date: "",
        dosis: "",
        toedining: "",
    });

    const handleInputChange = (field: keyof MedicationData, value: string) => {
        setMedicationData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <>
            <div className=" relative h-[450px] w-[245px] rounded-3xl border-2 border-dark-blue pt-5">
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
                    <div className="flex h-full w-full flex-row items-center justify-center ">
                        <div className="flex w-full flex-col items-center justify-center gap-2 border-b-2 border-dark-blue pb-4 text-dark-blue">
                            <div>
                                <p className="text-lg font-semibold">Adrenaline</p>
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

                    <div className="flex h-full w-full flex-row justify-center pt-4">
                        <div className="flex w-full flex-col items-center justify-center gap-4 text-dark-blue">
                            <div className="flex flex-col items-start gap-2 pl-1">
                                <div className="relative flex flex-row items-center justify-start gap-2">
                                    <IconClockHour4 color="#497DAE" className="absolute flex items-center pl-4" size={40} />
                                    <input
                                        className="flex h-[55px] w-[210px] flex-row justify-center rounded-full border-2 border-dark-blue px-10"
                                        type="time"
                                        value={medicationData.time}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("time", e.target.value)}
                                    />
                                </div>
                                <div className="relative flex flex-row items-center justify-start gap-2">
                                    <IconCalendarEvent color="#497DAE" className="absolute flex items-center pl-4" size={40} />
                                    <input
                                        title="Dosis"
                                        type="date"
                                        className="flex h-[55px] w-[210px] flex-row justify-center rounded-full border-2 border-dark-blue px-10"
                                        value={medicationData.date}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("date", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        className="h-[55px] w-[210px] rounded-full border-2 border-dark-blue px-2"
                                        type="text"
                                        placeholder="Dosis"
                                        value={medicationData.dosis}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("dosis", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <InputSelect
                                        title="Toedening"
                                        menuItems={...toedining}
                                        height="h-[55px] w-full"
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
