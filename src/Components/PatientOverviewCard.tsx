import '../index.css';
import { getGender } from './helpers';
import { getBorderColorClass } from '../stories/helpers/ClientDataFunctions';
import {
    IconCalendarEvent,
    IconClockHour4,
    IconPill,
    IconPointFilled,
    IconWorld,
} from '@tabler/icons-react';
import { PatientOverviewCardrops } from '../interfaces';
// bg-gradient-to-r from-white to-light-green
export const PatientOverviewCard = ({
    time,
    name,
    language,
    gender,
    dateOfBirth,
    urgency,
    nationality,
    allergies,
}: PatientOverviewCardrops) => {
    return (
        <div
            className={`h-[309px] w-[391px] bg-transparant shadow-xl border flex flex-row justify-between border-l-[6px] ${getBorderColorClass(
                urgency,
            )} pt-3 rounded-md`}
        >
            <div className="flex flex-col h-full w-full">
                <div className="pl-4">
                    <p className="text-2xl text-black font-medium">{name}</p>
                </div>
                <div className="flex flex-row gap-2 pl-5">
                    <div className="w-1/2 flex flex-col justify-start gap-2 pt-2 pr-2 text-p-text-color font-light ">
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
                            <IconWorld color="#294564" stroke="1.3" />

                            <div>
                                <p>
                                    {nationality} - {language}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconCalendarEvent color="#294564" stroke="1.3" />
                            <div>
                                <p>{dateOfBirth}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconClockHour4 color="#294564" stroke="1.3" />
                            <div>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 pb-2">
                            <IconPill color="#294564" stroke="1.3" />

                            <div>
                                {allergies ? (
                                    <p>Allergieën: Yes</p>
                                ) : (
                                    <p>Allergieën: No</p>
                                )}
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
            </div>
        </div>
    );
};

export default PatientOverviewCard;
