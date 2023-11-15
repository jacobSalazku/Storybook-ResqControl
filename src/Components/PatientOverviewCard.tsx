import '../index.css';
import Icon from './icon';
import { getGender } from './helpers';
import { getBorderColorClass } from '../stories/helpers/ClientDataFunctions';

/** Card with all the Patient information */
export interface PatientOverviewCardrops {
    name: string;
    language: string;
    urgency?: string | undefined;
    time: string;
    gender: string;
    triageLevel: string;
    nationality: string;
    dateOfBirth: string;
    allergies: boolean;
}

// bg-gradient-to-r from-white to-light-green
export const PatientOverviewCard = ({
    time,
    name,
    language,
    gender,
    dateOfBirth,
    urgency,
    nationality,
    allergies,
}: PatientOverviewCardrops) => {
    return (
        <div
            className={`h-[309px] w-[391px] bg-transparant shadow-xl border flex flex-row justify-between border-l-[6px] ${getBorderColorClass(
                urgency,
            )}   pt-3 rounded-md`}
        >
            <div className="flex flex-col h-full w-full">
                <div className="pl-4">
                    <p className=" text-2xl text-black font-medium ">{name}</p>
                </div>
                <div className="flex flex-row gap-2 pl-5">
                    <div className=" w-1/2 flex flex-col justify-start gap-2 pt-2 pr-2 text-p-text-color font-light ">
                        <div>
                            <p className="font-semibold text">
                                Gegevens Patient
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            {getGender(gender)}
                            <div>
                                <p>{gender}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <Icon
                                icon="icon-tabler-world"
                                color="#294564"
                                path={
                                    <>
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                        <path d="M3.6 9h16.8" />
                                        <path d="M3.6 15h16.8" />
                                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                                    </>
                                }
                            />

                            <div>
                                <p>
                                    {nationality} - {language}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <Icon
                                icon="icon-tabler-calendar-event"
                                color="#294564"
                                path={
                                    <>
                                        <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M16 3l0 4" />
                                        <path d="M8 3l0 4" />
                                        <path d="M4 11l16 0" />
                                        <path d="M8 15h2v2h-2z" />
                                    </>
                                }
                            />
                            <div>
                                <p>{dateOfBirth}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <Icon
                                icon="icon-tabler-clock-hour-4"
                                color="#294564"
                                path={
                                    <>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 12l3 2" />
                                        <path d="M12 7v5" />
                                    </>
                                }
                            />
                            <div>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4  pb-2">
                            <Icon
                                icon="icon-tabler-pill"
                                color="#294564"
                                path={
                                    <>
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
                                        <path d="M8.5 8.5l7 7" />
                                    </>
                                }
                            />

                            <div>
                                <p>Allergieën:{allergies}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 pt-2 pl-2 border-l  border-black font-light">
                        <div>
                            <p className="font-semibold">Klachten Patient</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <Icon
                                icon="icon-tabler-point-filled"
                                color="#294564"
                                height="6"
                                width="6"
                                path={
                                    <>
                                        {' '}
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path
                                            d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                                            stroke-width="0"
                                            fill="currentColor"
                                        />
                                    </>
                                }
                            />
                            <p>Pijn op de borst</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <Icon
                                icon="icon-tabler-point-filled"
                                color="#294564"
                                height="6"
                                width="6"
                                path={
                                    <>
                                        {' '}
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path
                                            d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                                            stroke-width="0"
                                            fill="currentColor"
                                        />
                                    </>
                                }
                            />
                            <p>Hoofdpijn</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <Icon
                                icon="icon-tabler-point-filled"
                                color="#294564"
                                height="6"
                                width="6"
                                path={
                                    <>
                                        {' '}
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path
                                            d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                                            stroke-width="0"
                                            fill="currentColor"
                                        />
                                    </>
                                }
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
