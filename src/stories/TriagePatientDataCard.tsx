import '../index.css'
import TriageOption from './TriageOption'

import globeIcon from './icons/globe.png'
import eventIcon from './icons/event.png'
import acuteIcon from './icons/acute.png'
import { getUrgencyIcon } from './helpers/ClientDataFunctions'

/** Card with all the Patient information */
export interface TriagePatientprops {
    name: string
    date: string | number
    language: string
    urgency?: string | undefined
    time: string
    triageLevel: string
}

// bg-gradient-to-r from-white to-light-green
export const TriagePatientDataCard = ({
    time,
    urgency,
    name,
    language,
    date,
    triageLevel,
}: TriagePatientprops) => {
    return (
        <div className="h-[20rem] w-[22rem] bg-card-background-color flex flex-row justify-between  border-2 border-dark-blue rounded-2xl pt-4  ">
            <div className=" flex flex-col  ">
                <div className="flex flex-col gap-2 pl-8">
                    <div>
                        <p className=" text-2xl text-black  font-medium ">
                            {name}
                        </p>
                    </div>

                    <div className=" w-[17.5rem] flex flex-row justify-start gap-5 pt-2 border-b-2 border-dark-blue pb-2 text-p-text-color ">
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
                    <div className="flex flex-col items-start gap-2 pt-4  ">
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
                <div className="  w-[22rem] h-full flex flex-row justify-center  items-center  ">
                    <TriageOption triageSelection={triageLevel} />
                </div>
            </div>
            <div className="pr-4 flex flex-col justify-center cursor-pointer">
                {getUrgencyIcon(urgency)}
            </div>
        </div>
    )
}

export default TriagePatientDataCard
