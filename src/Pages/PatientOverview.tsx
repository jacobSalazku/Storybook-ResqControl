import { PatientOverviewCard } from '../Components/PatientOverviewCard';
import { EyeLogo } from '../stories/helpers/ClientDataFunctions';
import IconButton from '../Components/IconButton';
import TreatmentCard from '../Components/TreatmentCard';
import TitleCard from '../Components/TitleCard';
import { NextIcon } from '../stories/helpers/ClientDataFunctions';
import { useState } from 'react';
import Header from '../Components/Header';

const Patient = {
    time: '12:50',
    urgency: 'base',
    name: 'John Doe',
    language: 'DE',
    date: '20',
    gender: 'Man',
    nationality: 'België',
    dateOfBirth: '02/12/2002',
    triageLevel: 'T2',
    allergies: false,
};
export const PatientOverview = () => {
    const [completedTreatments, setCompletedTreatments] = useState([
        false,
        false,
        false,
    ]);
    const [currentTreatmentCardIndex, setCurrentTreatmentCardIndex] =
        useState(0);

    const handleClick = () => {
        const newCompletedTreatments = [...completedTreatments];

        for (let i = 0; i <= currentTreatmentCardIndex; i++) {
            newCompletedTreatments[i] = true;
        }

        setCompletedTreatments(newCompletedTreatments);

        setCurrentTreatmentCardIndex(currentTreatmentCardIndex + 1);
    };

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center">
                <Header />
                <div className="w-[58rem] flex flex-col justify-center items-center before: bg-white">
                    <TitleCard
                        title="Patient Overzicht"
                        icon={EyeLogo}
                        rightButton={
                            <IconButton
                                label="Patient weg"
                                backgroundColor=" text-white bg-p-yellow border-p-yellow shadow-md"
                                size="h-[40px] w-[143px]"
                                icon={NextIcon}
                                variant="rounded-sm"
                            />
                        }
                    />
                    <div className="h-[26rem] w-[58rem] bg-card-background-color  text-p-text-color flex flex-col justify-start  my-0 items-center rounded-lg overflow-hidden ">
                        <div className=" w-full flex flex-row justify-center my-6 ">
                            <div className="mx-6">
                                <PatientOverviewCard {...Patient} />
                            </div>
                            <div className=" w-full mr-4 ">
                                <TreatmentCard
                                    isCompleted={completedTreatments[0]}
                                    description="Basis Verzorging"
                                    onClick={handleClick}
                                />
                                <TreatmentCard
                                    isCompleted={completedTreatments[1]}
                                    description="Behandelingen"
                                    onClick={handleClick}
                                />
                                <TreatmentCard
                                    isCompleted={completedTreatments[2]}
                                    description="Ontslag"
                                    onClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
