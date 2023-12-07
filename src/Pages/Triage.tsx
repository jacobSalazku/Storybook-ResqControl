import IconButton from '../Components/IconButton';
import TitleCard from '../Components/TitleCard';
import IconButtonLogoRight from '../Components/IconButtonLogoRight';
import Header from '../Components/Header';
import PatientOverviewCard from '../Components/PatientOverviewCard';
import {
    IconArrowBarLeft,
    IconArrowBarRight,
    IconClipboardCheck,
} from '@tabler/icons-react';
import TriageOption from '../Components/TriageOption';
import Pathology from '../Components/Pathology';
import TitleCardButton from '../Components/TitleCardButton';

const Patient = {
    time: '12:50',
    urgency: 'T2',
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
    return (
        <div className="flex h-screen flex-col items-center bg-background-color">
            <div className="gap- flex w-full flex-col items-center justify-center md:max-w-[960px]">
                <Header />
                <TitleCard
                    title="Triage"
                    leftButton={
                        <TitleCardButton
                            label="Triage Annuleren"
                            size="h-auto w-auto"
                            icon={
                                <IconArrowBarLeft
                                    color="#FFFFFF"
                                    height="20"
                                    width="20"
                                />
                            }
                            backgroundColor="bg-p-red border-p-red hover:bg-[#f7554f] shadow-md text-white"
                            variant="rounded"
                        />
                    }
                />
                <div className="flex w-full flex-col gap-6 md:px-4 ">
                    <div className="flex flex-row justify-center ">
                        <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                            <PatientOverviewCard {...Patient} />
                            <div className="flex flex-col items-start justify-start gap-8 md:pl-4">
                                <Pathology />
                                <TriageOption />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-1 justify-center sm:justify-end">
                        <div className="flex w-full flex-row justify-between md:w-1/2 md:pl-4 ">
                            <IconButton
                                label="Naar TRI wachtrij"
                                backgroundColor="bg-transparant border-light-blue text-light-blue font-base"
                                variant="rounded"
                                size="h-[40px] w-[172px]"
                                icon={<IconClipboardCheck size={24} />}
                            />
                            <IconButtonLogoRight
                                label="Start behandeling"
                                icon={<IconArrowBarRight size={24} />}
                                size="h-[40px] w-[193px]"
                                variant="rounded"
                                backgroundColor="border-light-blue bg-light-blue text-white shadow-lg "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Triage;
