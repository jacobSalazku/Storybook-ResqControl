import '../index.css';
import TriageOption from './TriageOption';
import { getGender } from './helpers';
import { PatientProps } from '../interfaces';
import { getUrgencyIcon } from '../stories/helpers/ClientDataFunctions';
import {
    IconCalendarEvent,
    IconClockHour4,
    IconPill,
    IconPointFilled,
    IconWorld,
} from '@tabler/icons-react';

// bg-gradient-to-r from-white to-light-green
export const TriagePatientDataCard = ({
    time,
    urgency,
    name,
    language,
    dateOfBirth,
    gender,
    nationality,
    allergies,
}: PatientProps) => {
    return (
        <div className="h-[400px] w-[391px] bg-card-background-color shadow-xl flex flex-row justify-between border-l-[6px] border-[#EE7E7A] pt-4 rounded-md ">
            <div className="flex flex-col w-full h-full ">
                <div className="pl-4">
                    <p className="text-2xl text-black font-medium ">{name}</p>
                </div>
                <div
                    className="flex flex-row gap-1 pl-4
            "
                >
                    <div className="w-[200px] flex flex-col justify-start gap-2 pt-2 pr-2 pl-2 text-p-text-color font-light ">
                        <div>
                            <p className="font-semibold text">
                                Gegevens Patient
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            {getGender(gender)}
                            <div>
                                <p>{gender}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconWorld color="#294564" stroke="1.3" size={24} />
                            <div>
                                <p>
                                    {nationality} - {language}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconCalendarEvent
                                color="#294564"
                                stroke="1.3"
                                size={24}
                            />
                            <div>
                                <p>{dateOfBirth}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconClockHour4
                                color="#294564"
                                stroke="1.3"
                                size={24}
                            />
                            <div>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconPill color="#294564" stroke="1.3" size={24} />

                            <div>
                                <p>Allergieën:{allergies}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 pt-2 pl-2 border-l border-black font-light">
                        <div>
                            <p className="font-semibold">Klachten Patient</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled
                                color="#294564"
                                stroke="1.3"
                                size="6"
                            />
                            <p>Pijn op de borst</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled
                                color="#294564"
                                stroke="1.3"
                                size="6"
                            />
                            <p>Hoofdpijn</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled
                                color="#294564"
                                stroke="1.3"
                                size="6"
                            />
                            <p>Braken</p>
                        </div>
                    </div>
                </div>
                <div className="w-[17rem] h-full flex flex-col items-start justify-center gap-2">
                    <p className="pl-4 font-medium">Triage codes</p>
                    <TriageOption />
                </div>
            </div>
            <div className="pr-4 flex flex-col justify-center cursor-pointer">
                {getUrgencyIcon(urgency)}
            </div>
        </div>
    );
};

export default TriagePatientDataCard;
