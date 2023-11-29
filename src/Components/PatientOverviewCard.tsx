import '../index.css';
import { getGender } from './helpers';
import { getBorderColorClass } from '../stories/helpers/ClientDataFunctions';
import {
    IconCalendarEvent,
    IconClockHour4,
    IconDownload,
    IconEdit,
    IconPill,
    IconPointFilled,
    IconWorld,
    IconX,
} from '@tabler/icons-react';
import { PatientProps } from '../interfaces';
import { useState } from 'react';

export const PatientOverviewCard = ({
    time,
    name,
    language,
    gender,
    dateOfBirth,
    urgency,
    nationality,
    allergies,
}: PatientProps) => {
    const [editMode, setEditMode] = useState(false);
    const [nationalities, setNationalities] = useState(nationality);
    const [languages, setLanguages] = useState(language);

    const [editData, setEditData] = useState({
        gender: { gender },
        language: { language },
        nationality: { nationality },
        dateOfBirth: { dateOfBirth },
        allergies: { allergies },
    });
    const ClickEditMode = () => setEditMode(true);

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditData({
            gender: { gender },
            language: { language },
            nationality: { nationality },
            dateOfBirth: { dateOfBirth },
            allergies: { allergies },
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSaveEdit = () => {
        setEditData((prevState) => {
            return {
                ...prevState,
                editData,
            };
        });
        setEditMode(false);
    };

    return (
        <div
            className={`h-[309px] w-[391px] bg-transparant shadow-xl border flex flex-row justify-between border-l-[6px] ${getBorderColorClass(
                urgency,
            )} pt-3 rounded-md`}
        >
            <div className="flex flex-col h-full w-full">
                <div className="pl-4">
                    <p className="text-2xl text-black font-medium">{name}</p>
                </div>
                <div className="flex flex-row gap- pl-5">
                    <div className="w-3/5 flex flex-col justify-start gap-2 pt-2 pr-2 text-p-text-color font-light ">
                        <div className=" flex flow-row gap-4">
                            <p className="font-semibold text">
                                Gegevens Patient
                            </p>
                            {editMode ? (
                                <div className=" w-1/5 flex flex-row justify-end">
                                    <IconX
                                        onClick={handleCancelEdit}
                                        className="cursor-pointer"
                                    />

                                    <IconDownload
                                        onClick={() => handleSaveEdit()}
                                        className="cursor-pointer"
                                    />
                                </div>
                            ) : (
                                <div className="w-1/5 flex flex-row  justify-end ">
                                    <IconEdit
                                        onClick={ClickEditMode}
                                        className="cursor-pointer"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            {getGender(gender)}
                            <div>
                                <p>{gender}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconWorld color="#294564" stroke="1.3" />
                            {editMode ? (
                                <>
                                    <input
                                        value={`${nationalities} - ${languages}`}
                                        type="text"
                                        onChange={(e) => {
                                            const [
                                                newNationality,
                                                newLanguage,
                                            ] = e.target.value.split(' - ');
                                            setNationalities(newNationality);
                                            setLanguages(newLanguage);
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <div>
                                        <p>
                                            {nationality} - {language}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconCalendarEvent color="#294564" stroke="1.3" />
                            {editMode ? (
                                <>
                                    <input value={dateOfBirth} type="text" />
                                </>
                            ) : (
                                <>
                                    <div>
                                        <p>{dateOfBirth}</p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex flex-row gap-4 border-b border-color-grey pb-2">
                            <IconClockHour4 color="#294564" stroke="1.3" />
                            <div>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 pb-2">
                            <IconPill color="#294564" stroke="1.3" />
                            {editMode ? (
                                <>
                                    <input
                                        value={`Allergieën: ${
                                            allergies.toString() == 'false'
                                                ? 'No'
                                                : 'es'
                                        }`}
                                        type="text"
                                    />
                                </>
                            ) : (
                                <div>
                                    {allergies ? (
                                        <p>Allergieën: Yes</p>
                                    ) : (
                                        <p>Allergieën: No</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 pt-2 pl-2 border-l border-black font-light">
                        <div>
                            <p className="font-semibold">Klachten Patient</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled
                                color="#294564"
                                stroke="1.3"
                                size="6"
                            />
                            <p>Pijn op de borst</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled
                                color="#294564"
                                stroke="1.3"
                                size="6"
                            />
                            <p>Hoofdpijn</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled
                                color="#294564"
                                stroke="1.3"
                                size="6"
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
