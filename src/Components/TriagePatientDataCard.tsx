import "../index.css";
import TriageOption from "./TriageOption";
import { getGender } from "./helpers";
import { PatientProps } from "../interfaces";
import { getUrgencyIcon } from "../stories/helpers/ClientDataFunctions";
import { IconCalendarEvent, IconClockHour4, IconPill, IconPointFilled, IconWorld } from "@tabler/icons-react";

// bg-gradient-to-r from-white to-light-green
export const TriagePatientDataCard = ({ time, urgency, name, language, dateOfBirth, gender, nationality, allergies }: PatientProps) => {
    return (
        <div className="bg-card-background-color flex h-[400px] w-[391px] flex-row justify-between rounded-md border-l-[6px] border-[#EE7E7A] pt-4 shadow-xl ">
            <div className="flex h-full w-full flex-col ">
                <div className="pl-4">
                    <p className="text-2xl font-medium text-black ">{name}</p>
                </div>
                <div className="flex flex-row gap-1 pl-4 ">
                    <div className="flex w-[200px] flex-col justify-start gap-2 pl-2 pr-2 pt-2 font-light text-p-text-color ">
                        <div>
                            <p className="text font-semibold">Gegevens Patient</p>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            {getGender(gender)}
                            <div>
                                <p>{gender}</p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            <IconWorld color="#294564" stroke="1.3" size={24} />
                            <div>
                                <p>
                                    {nationality} - {language}
                                </p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            <IconCalendarEvent color="#294564" stroke="1.3" size={24} />
                            <div>
                                <p>{dateOfBirth}</p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            <IconClockHour4 color="#294564" stroke="1.3" size={24} />
                            <div>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            <IconPill color="#294564" stroke="1.3" size={24} />

                            <div>
                                <p>Allergieën:{allergies}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 border-l border-black pl-2 pt-2 font-light">
                        <div>
                            <p className="font-semibold">Klachten Patient</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled color="#294564" stroke="1.3" size="6" />
                            <p>Pijn op de borst</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled color="#294564" stroke="1.3" size="6" />
                            <p>Hoofdpijn</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled color="#294564" stroke="1.3" size="6" />
                            <p>Braken</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-[17rem] flex-col items-start justify-center gap-2">
                    <p className="pl-4 font-medium">Triage codes</p>
                    <TriageOption />
                </div>
            </div>
            <div className="flex cursor-pointer flex-col justify-center pr-4">{getUrgencyIcon(urgency)}</div>
        </div>
    );
};

export default TriagePatientDataCard;
