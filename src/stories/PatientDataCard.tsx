import '../index.css'
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
    language: string
    urgency?: string | undefined
    time: string
    date: string | number
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
            className={` h-[12.5rem] w-[24rem] bg-card-background-color border-l-8 border-t-2
            border-b-2   shadow-xl shadow-black ${getBorderColorClass(
                urgency
            )} flex flex-row justify-between rounded-3xl pt-4 pl-4 `}
        >
            <div className=" flex flex-col gap">
                <div>
                    <p className=" text-2xl text-black ">{name}</p>
                </div>

                <div
                    className={`flex flex-row justify-start gap-5 pt-2 border-b-2 pb-2 text-p-text-color ${getBorderBottomColorClass(
                        urgency
                    )}`}
                >
                    <div className="flex flex-row  gap-2 ">
                        <img src={acuteIcon} />
                        <div>
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={eventIcon} />
                        <div>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={globeIcon} />
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
