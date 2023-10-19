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

const SmallDataCard = ({
    time,
    urgency,
    name,
    language,
    date,
}: PatientProps) => {
    return (
        <div
            className={` h-[9.5rem] w-[24rem] bg-card-background-color border-l-8 border-t-2
    border-b-2   shadow-lg shadow-p-grey ${getBorderColorClass(
        urgency
    )} flex flex-row justify-between rounded-3xl pt-4 pl-4`}
        >
            <div className=" flex flex-col gap">
                <div>
                    <p className="  font-sans text-2xl text-black ">{name}</p>
                </div>

                <div
                    className={`flex flex-row justify-start gap-5 pt-2 border-b-2 pb-4 text-p-text-color ${getBorderBottomColorClass(
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
                <div className="flex flex-row items-start  justify-between before:gap-1 pt-4  text-sm ">
                    <div className="">
                        <p>Hoofdpijn</p>
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

export default SmallDataCard
