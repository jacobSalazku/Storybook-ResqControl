import '../index.css';
import { getGender } from './helpers';
import { getBorderColorClass } from '../stories/helpers/ClientDataFunctions';
import {
    IconArrowBigRightLines,
    IconCalendarEvent,
    IconClockHour4,
    IconPointFilled,
    IconWorld,
} from '@tabler/icons-react';
import { stringDate } from '../stories/helpers/DateTime';
import { PatientProps } from '../interfaces';

const SmallDataCard = ({
    time,
    urgency,
    name,
    language,
    gender,
}: PatientProps) => {
    return (
        <div
            className={`bg-card-background-color h-[7.125rem] w-[272px] border-l-4 shadow-md shadow-p-grey ${getBorderColorClass(
                urgency,
            )} flex flex-row justify-between rounded px-4 pt-2`}
        >
            <div className="gap flex w-full flex-col">
                <div className="flex flex-row items-center ">
                    <div className="flex w-full flex-row justify-between">
                        <p className="font-sans text-[18px] text-black ">
                            {name}
                        </p>
                        <IconArrowBigRightLines color="#4A4A4A" />
                    </div>
                </div>

                <div className="flex flex-row justify-start gap-6 pb-2 pt-2 text-[14px] text-p-text-color">
                    <div className="flex w-full flex-row items-center gap-2 border-b-2 ">
                        <div className="">
                            <p>Botstpijn</p>
                        </div>
                        <IconPointFilled
                            color="#294564"
                            stroke="1.3"
                            size="6"
                        />
                        <div>
                            <p>Hoofdpijn</p>
                        </div>
                        <IconPointFilled
                            color="#294564"
                            stroke="1.3"
                            size="6"
                        />
                        <div>
                            <p>Braken</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between pr-14 pt-1 text-sm ">
                    <div className="flex flex-row items-center justify-center">
                        {getGender(gender)}

                        <div className="flex flex-row items-center justify-center gap-1 pl-2">
                            <IconClockHour4
                                color="#294564"
                                stroke="1.3"
                                size={20}
                            />
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <IconCalendarEvent
                            color="#294564"
                            stroke="1.3"
                            size={20}
                        />
                        <div>
                            <p>{stringDate}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <IconWorld color="#294564" stroke="1.3" size={20} />
                        <div>
                            <p>{language}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallDataCard;
