import IconButton from '../Components/IconButton';
import TreatmentCard from '../Components/TreatmentCard';
import TitleCard from '../Components/TitleCard';
import { IconRun, IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import Header from '../Components/Header';
import PatientOverviewCard from '../Components/PatientOverviewCard';

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
            <div className="flex h-auto max-w-[58rem] flex-col items-center">
                <div className="flex w-full flex-col items-center justify-center bg-white ">
                    <Header />
                    <TitleCard
                        title="Patient Overzicht"
                        icon={
                            <IconEye color="#497DAE" size="44" stroke="1.5" />
                        }
                        rightButton={
                            <IconButton
                                label="Patient weg"
                                backgroundColor=" text-white bg-p-yellow border-p-yellow shadow-md"
                                size="h-[40px] w-[143px]"
                                icon={<IconRun />}
                                variant="rounded-sm"
                            />
                        }
                    />
                    <div className="bg-card-background-color my-0 flex  h-[26rem] w-[58rem] flex-col items-center  justify-start overflow-hidden rounded-lg text-p-text-color ">
                        <div className="my-6 flex w-full flex-row justify-center ">
                            <div className="mx-6">
                                <PatientOverviewCard {...Patient} />
                            </div>
                            <div className="mr-4 w-full ">
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
