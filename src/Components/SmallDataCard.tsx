import '../index.css';
import { getGender } from './helpers';
import {
    getBorderColorClass,
    BlueArrowWaiting,
} from '../stories/helpers/ClientDataFunctions';
import {
    IconCalendarEvent,
    IconClockHour4,
    IconPointFilled,
    IconWorld,
} from '@tabler/icons-react';
import { stringDate } from '../stories/helpers/DateTime';

/** Card with all the Patient information */
export interface PatientProps {
    name: string;
    language: string;
    urgency: string;
    time: string;
    date: string;
    gender: string;
    dateOfBirth: string;
}

const SmallDataCard = ({
    time,
    urgency,
    name,
    language,
    gender,
    dateOfBirth,
}: PatientProps) => {
    return (
        <div
            className={`h-[7.125rem] w-[17.625rem] bg-card-background-color border-l-8 shadow-md shadow-p-grey ${getBorderColorClass(
                urgency,
            )} flex flex-row justify-between rounded pt-2 px-2`}
        >
            <div className="w-full flex flex-col gap">
                <div className="flex flex-row gap-1 items-center">
                    <p className="font-sans text-[18px] text-black ">{name}</p>
                    <p className="text-[#D3D3D3] font-extralight text-[14px]">
                        {dateOfBirth}
                    </p>
                </div>

                <div className="flex flex-row justify-start gap-6 pt-2 pb-2 text-p-text-color text-[14px]">
                    <div className="flex flex-row border-b-2 items-center gap-2">
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

                    <div className="flex flex-col justify-center cursor-pointer ">
                        {BlueArrowWaiting}
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between pt-1 text-sm pr-14 ">
                    <div className="flex flex-row justify-center items-center">
                        {getGender(gender)}

                        <div className="flex flex-row justify-center items-center pl-1">
                            <IconClockHour4
                                color="#294564"
                                stroke="1.3"
                                size={24}
                            />
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <IconCalendarEvent
                            color="#294564"
                            stroke="1.3"
                            size={24}
                        />
                        <div>
                            <p>{stringDate}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap justify-center items-center">
                        <IconWorld color="#294564" stroke="1.3" size={24} />
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
