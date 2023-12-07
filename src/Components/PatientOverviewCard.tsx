import '../index.css';
import { getGender } from './helpers';
import { getBorderColorClass } from '../stories/helpers/ClientDataFunctions';
import {
    IconCalendarEvent,
    IconClockHour4,
    IconEdit,
    IconPill,
    IconPointFilled,
    IconWorld,
} from '@tabler/icons-react';
import { PatientProps } from '../interfaces';

const PatientOverviewCard = ({
    time,
    name,
    language,
    gender,
    dateOfBirth,
    urgency,
    nationality,
    allergies,
}: PatientProps) => {
    return (
        <div
            className={` flex w-full flex-row justify-between border-l-[6px]
                bg-white shadow-md shadow-[#808080] transition-all sm:h-[276px] md:w-[432px]  ${getBorderColorClass(
                    urgency,
                )} rounded pt-3`}
        >
            <div className="flex h-full w-full flex-col">
                <div className="flex flex-row justify-between px-4">
                    <p className="text-[18px] font-medium text-black">{name}</p>
                    <IconEdit
                        className="cursor-pointer"
                        height={30}
                        width={30}
                    />
                </div>
                <div className="flex flex-row pl-5 ">
                    <div className="flex w-auto flex-col justify-start pr-2 pt-2 font-light text-p-text-color ">
                        <div className="border-color-grey flex flex-row gap-4">
                            {getGender(gender)}
                            <div>
                                <p>{gender}</p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 py-2">
                            <IconWorld color="#294564" stroke="1.3" />

                            <div className="">
                                <p>
                                    {nationality} - {language}
                                </p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 pb-2">
                            <IconCalendarEvent color="#294564" stroke="1.3" />

                            <div>
                                <p>{dateOfBirth}</p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 pb-2">
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
                        <div>
                            <p className="font-semibold">
                                Klachten registratie
                            </p>
                        </div>
                        <div className="gap flex w-full flex-row items-center justify-start gap-1 pl-2 font-light ">
                            <p>Pijn op de borst</p>

                            <IconPointFilled
                                color="#294564"
                                stroke="1.3"
                                size="6"
                            />
                            <p>Hoofdpijn</p>

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
