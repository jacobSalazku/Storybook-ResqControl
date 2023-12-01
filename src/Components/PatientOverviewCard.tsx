import "../index.css";
import { getGender } from "./helpers";
import { getBorderColorClass } from "../stories/helpers/ClientDataFunctions";
import { IconCalendarEvent, IconClockHour4, IconDownload, IconEdit, IconPill, IconPointFilled, IconWorld, IconX } from "@tabler/icons-react";
import { PatientProps } from "../interfaces";
import { useState } from "react";

interface EditData {
    gender: string;
    language: string;
    nationality: string;
    dateOfBirth: string;
    allergies: boolean;
}
const PatientOverviewCard = ({ time, name, language, gender, dateOfBirth, urgency, nationality, allergies }: PatientProps) => {
    const [editMode, setEditMode] = useState(false);
    const [nationalities, setNationalities] = useState(nationality);
    const [languages, setLanguages] = useState(language);
    const [dateOfBirthState, setDateOfBirth] = useState(dateOfBirth);
    const [allergiesState, setAllergies] = useState(allergies);

    const [originalValues, setOriginalValues] = useState<EditData>({
        gender,
        language,
        nationality,
        dateOfBirth,
        allergies,
    });

    const [editData, setEditData] = useState<EditData>(originalValues);

    const ClickEditMode = () => setEditMode(true);

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditData(originalValues);
    };

    const handleSaveEdit = () => {
        setEditData((prevState: EditData) => ({
            ...prevState,
            language: languages,
            nationality: nationalities,
            dateOfBirth: dateOfBirthState,
            allergies: allergiesState,
        }));
        setEditMode(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [newNationality, newLanguage, newDateOfBirth, newAllergies] = e.target.value.split(" - ");
        setNationalities(newNationality);
        setLanguages(newLanguage);
        setDateOfBirth(newDateOfBirth);
        setAllergies(newAllergies === "Yes");
    };

    return (
        <div
            className={`bg-transparant flex h-[309px] w-[391px] flex-row justify-between border border-l-[6px] shadow-xl ${getBorderColorClass(
                urgency,
            )} rounded-md pt-3`}
        >
            <div className="flex h-full w-full flex-col">
                <div className="pl-4">
                    <p className="text-2xl font-medium text-black">{name}</p>
                </div>
                <div className="gap- flex flex-row pl-5">
                    <div className="flex w-3/5 flex-col justify-start gap-2 pr-2 pt-2 font-light text-p-text-color ">
                        <div className="flow-row flex gap-4">
                            <p className="text font-semibold">Gegevens Patient</p>
                            {editMode ? (
                                <div className="flex w-1/5 flex-row justify-end ">
                                    <IconX onClick={handleCancelEdit} className="cursor-pointer" />

                                    <IconDownload onClick={() => handleSaveEdit()} className="cursor-pointer" />
                                </div>
                            ) : (
                                <div className="flex w-1/5 flex-row justify-end ">
                                    <IconEdit onClick={ClickEditMode} className="cursor-pointer" />
                                </div>
                            )}
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            {getGender(gender)}
                            <div>
                                <p>{gender}</p>
                            </div>
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b py-2">
                            <IconWorld color="#294564" stroke="1.3" />
                            {editMode ? (
                                <>
                                    <input className="" value={`${nationalities} - ${languages}`} type="text" onChange={handleInputChange} />
                                </>
                            ) : (
                                <>
                                    <div className="">
                                        <p>
                                            {editData.nationality} - {editData.language}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            <IconCalendarEvent color="#294564" stroke="1.3" />
                            {editMode ? (
                                <>
                                    <input value={dateOfBirthState} type="text" />
                                </>
                            ) : (
                                <>
                                    <div>
                                        <p>{editData.dateOfBirth}</p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="border-color-grey flex flex-row gap-4 border-b pb-2">
                            <IconClockHour4 color="#294564" stroke="1.3" />
                            <div>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 pb-2">
                            <IconPill color="#294564" stroke="1.3" />
                            {editMode ? (
                                <>
                                    <input value={`Allergieën: ${editData.allergies.toString() == "false" ? "No" : "Yes"}`} type="text" />
                                </>
                            ) : (
                                <div>{allergies ? <p>Allergieën: Yes</p> : <p>Allergieën: No</p>}</div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 border-l border-black pl-2 pt-2 font-light">
                        <div>
                            <p className="font-semibold">Klachten Patient</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled color="#294564" stroke="1.3" size="6" />
                            <p>Pijn op de borst</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled color="#294564" stroke="1.3" size="6" />
                            <p>Hoofdpijn</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IconPointFilled color="#294564" stroke="1.3" size="6" />
                            <p>Braken</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientOverviewCard;
