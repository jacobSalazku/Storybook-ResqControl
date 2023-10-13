import './index.css'
import acuteIcon from './icons/acute.png'
import eventIcon from './icons/event.png'
import globeIcon from './icons/globe.png'

import {
    getUrgencyIcon,
    getBorderColorClass,
    getBorderBottomColorClass,
} from './helpers/ClientDataFunctions'

/** Card with all the Patient information */
export interface PatientProps {
    name: string
    date: string | number
    language: string
    urgency?: string | undefined
    time: string
}

// bg-gradient-to-r from-white to-light-green
export const PatientDataCard = ({
    time,
    urgency,
    name,
    language,
    date,
}: PatientProps) => {
    return (
        <div
            className={`h-[12.5rem] bg-card-background-color border-2 ${getBorderColorClass(
                urgency
            )} flex flex-row justify-between w-80 rounded-2xl pt-4 pl-4 `}
        >
            <div className=" flex flex-col gap ">
                <div>
                    <h1 className=" text-2xl text-black ">{name}</h1>
                </div>

                <div
                    className={`flex flex-row justify-start gap-5 pt-2 border-b-2 pb-2 text-p-text-color ${getBorderBottomColorClass(
                        urgency
                    )}`}
                >
                    <div className="flex flex-row  gap-2 ">
                        <div>
                            <img src={acuteIcon} color={urgency} alt="acute" />
                        </div>
                        <div>
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <img src={eventIcon} alt="date" />
                        </div>
                        <div>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <img src={globeIcon} alt="globe" />
                        </div>
                        <div>
                            <p>{language}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1 pt-2  ">
                    <div className="">
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
            <div className="pr-4 flex flex-col justify-center cursor-pointer">
                {getUrgencyIcon(urgency)}
            </div>
        </div>
    )
}
