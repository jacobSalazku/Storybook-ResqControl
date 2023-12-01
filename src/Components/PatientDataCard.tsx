import "../index.css";
import { PatientProps } from "../interfaces";
import { getGender } from "./helpers";
import { getBorderColorClass, getBorderBottomColorClass } from "../stories/helpers/ClientDataFunctions";
import { stringDate } from "../stories/helpers/DateTime";
import { IconCalendarEvent, IconClockHour4, IconWorld } from "@tabler/icons-react";

// bg-gradient-to-r from-white to-light-green
export const PatientDataCard = ({ time, urgency, name, language, gender }: PatientProps) => {
    return (
        <div
            className={`bg-card-background-color border-t-2border-b-2 h-[12.5rem] w-[24rem] border-l-8 shadow-xl
         shadow-black ${getBorderColorClass(urgency)} flex flex-row justify-between rounded-3xl pl-4 pt-4`}
        >
            <div className="gap flex flex-col">
                <div>
                    <p className="text-2xl text-black">{name}</p>
                </div>
                <div
                    className={`flex flex-row justify-start gap-5 border-b-2 pb-2 pt-2 text-p-text-color 
                    ${getBorderBottomColorClass(urgency)}`}
                >
                    <div className="flex flex-row gap-2">
                        {getGender(gender)}
                        <IconClockHour4 color="#294564" stroke="1.3" size={24} />
                        <div>
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <IconCalendarEvent color="#294564" stroke="1.3" size={24} />
                        <div>
                            <p>{stringDate}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <IconWorld color="#294564" stroke="1.3" size={24} />
                        <div>
                            <p>{language}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1 pt-2">
                    <div>
                        <p>Pijn op de borst</p>
                    </div>
                    <div>
                        <p>Hoofdpijn</p>
                    </div>
                    <div>
                        <p>Braken</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
