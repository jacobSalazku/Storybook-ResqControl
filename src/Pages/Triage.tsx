import IconButton from '../Components/IconButton';
import TitleCard from '../Components/TitleCard';
import IconButtonLogoRight from '../Components/IconButtonLogoRight';
import Header from '../Components/Header';
import PatientOverviewCard from '../Components/PatientOverviewCard';
import Pathology from '../Components/Pathology';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { PathologyData } from '../interfaces';
import {
    IconArrowBarLeft,
    IconArrowBarRight,
    IconReport,
} from '@tabler/icons-react';
import TriageOption from '../Components/TriageOption';

const Patient = {
    time: '12:50',
    urgency: 'base',
    name: 'John Doe',
    language: 'DE',
    date: '20-03',
    triageLevel: 'T2',
    gender: 'male',
    nationality: 'Belgie',
    dateOfBirth: '20/02/1997',
    allergies: false,
};

const Triage = () => {
    const [pathologies, setPathologies] = useState([
        {
            location: '',
            side: '',
        },
    ]);

    const handleAddPathology = () => {
        setPathologies((prevPathologies: PathologyData[]) => [
            ...prevPathologies,
            {
                location: '',
                side: '',
            },
        ]);
    };

    const DeletePathology = (index: number) => {
        setPathologies((prevPathologies: PathologyData[]) => {
            const updatedPathologies = [...prevPathologies];
            updatedPathologies.splice(index, 1); // Remove the pathology at the specified index
            return updatedPathologies;
        });
    };
    return (
        <div className="flex h-screen flex-col items-center">
            <div className="flex max-w-[960px] flex-col items-center justify-center gap-2">
                <Header />
                <TitleCard
                    title="Triage"
                    leftButton={
                        <IconButton
                            label="Triage Annuleren"
                            size="h-[40px] w-[171px]"
                            icon={
                                <IconArrowBarLeft
                                    color="#FFFFFF"
                                    height="20"
                                    width="20"
                                />
                            }
                            backgroundColor="bg-p-red border-p-red hover:bg-[#f7554f] shadow-md text-white"
                            variant="rounded-sm"
                        />
                    }
                    rightButton={
                        <IconButton
                            label="Naar Triage Wachtzaal"
                            size="h-[40px] w-[px]"
                            icon={<IconReport color="#263B54" stroke={1.5} />}
                            backgroundColor=" bg-white border-white hover:border-[#497DAE] hover:bg-[#497DAE] hover:text-white shadow-md"
                            variant="rounded-sm"
                        />
                    }
                />
                <div className="max-w flex flex-col gap-6 px-8">
                    <div className="flex flex-row justify-center ">
                        <div className="gap-4&& flex w-full flex-row justify-between">
                            <PatientOverviewCard {...Patient} />
                            <div className="flex flex-col items-start justify-start gap-2 pl-4">
                                <p className="font-semibold">Triage code</p>
                                <TriageOption />
                                <div>
                                    <p className="font-semibold">Pathologiën</p>
                                </div>

                                {pathologies.map(
                                    (
                                        pathology: PathologyData,
                                        index: number,
                                    ) => (
                                        <Pathology
                                            location={pathology.location}
                                            side={pathology.side}
                                            onDelete={() =>
                                                DeletePathology(index)
                                            }
                                        />
                                    ),
                                )}
                                <IconButton
                                    label="Voeg pathologie toe"
                                    icon={
                                        <IconPlus
                                            color="#ffffFf"
                                            stroke={1.5}
                                        />
                                    }
                                    size="h-[40px] w-[200px]"
                                    variant="rounded"
                                    backgroundColor="border-[#497DAE] bg-[#497DAE] text-white shadow-md shadow-[#808080]"
                                    onClick={() => handleAddPathology()}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-row justify-end ">
                        <IconButtonLogoRight
                            label="Patient Behandelen"
                            icon={<IconArrowBarRight />}
                            size="h-[40px] w-[193px]"
                            variant="rounded"
                            backgroundColor="border-[#497DAE] bg-[#497DAE] text-white shadow-lg "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Triage;
