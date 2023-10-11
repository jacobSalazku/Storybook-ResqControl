import acuteIcon from './icons/acute.png'
import eventIcon from './icons/event.png'
import globeIcon from './icons/globe.png'

import {
    getUrgencyIcon,
    getUrgencyGradientClass,
} from './helpers/ClientDataFunctions'
/** Card with all the Patient information */
export interface IPatient {
    name: string
    date: string
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
}: IPatient) => {
    return (
        <div
            className={`h-[12.825rem] bg-white  shadow-md flex flex-row justify-center items-center w-[20.5rem] rounded-2xl 
            ${getUrgencyGradientClass(urgency)} `}
        >
            <div
                className="h-[12.5rem] bg-white  flex flex-row justify-between w-80 rounded-2xl 
            pt-4 pl-4   "
            >
                <div className=" flex flex-col ">
                    <div>
                        <h1 className=" text-2xl text-black ">{name}</h1>
                    </div>

                    <div className="flex flex-row justify-start gap-5 pt-2">
                        <div className="flex flex-row  gap-2">
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
                    <div>
                        <p className="text-p-blue">Pijn op de borst</p>
                    </div>
                    <div>
                        <p className="text-p-blue">Hoofdpijn</p>
                    </div>
                    <div>
                        <p className="text-p-blue">Braken</p>
                    </div>
                    <div>
                        <p className="text-p-blue">Misslelijkheid</p>
                    </div>
                </div>
                <div className="pr-4 flex flex-col justify-center cursor-pointer">
                    {getUrgencyIcon(urgency)}
                </div>
            </div>
        </div>
    )
}
