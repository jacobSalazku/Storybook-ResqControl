import './index.css'
import acuteIcon from './icons/acute.png'
import eventIcon from './icons/event.png'
import globeIcon from './icons/globe.png'
import TriageOption from './TriageOption'
import { getUrgencyIcon } from './helpers/ClientDataFunctions'

/** Card with all the Patient information */
export interface TriagePatientprops {
    name: string
    date: string | number
    language: string
    urgency?: string | undefined
    time: string
}

// bg-gradient-to-r from-white to-light-green
export const TriagePatientDataCard = ({
    time,
    urgency,
    name,
    language,
    date,
}: TriagePatientprops) => {
    return (
        <div className="h-[19rem] w-[22rem] bg-card-background-color flex flex-row justify-between  border-2 border-dark-green rounded-2xl pt-4  ">
            <div className=" flex flex-col  ">
                <div className="flex flex-col gap-2 pl-8">
                    <div>
                        <h1 className=" text-2xl text-black  font-medium ">
                            {name}
                        </h1>
                    </div>

                    <div className=" w-[17.5rem] flex flex-row justify-start gap-5 pt-2 border-b-2 border-dark-green pb-2 text-p-text-color ">
                        <div className="flex flex-row  gap-2 ">
                            <div>
                                <img
                                    src={acuteIcon}
                                    color={urgency}
                                    alt="acute"
                                />
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
                    <TriageOption />
                </div>
            </div>
            <div className="pr-4 flex flex-col justify-center cursor-pointer">
                {getUrgencyIcon(urgency)}
            </div>
        </div>
    )
}

export default TriagePatientDataCard
