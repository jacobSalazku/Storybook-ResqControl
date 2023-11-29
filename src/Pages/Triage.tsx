import { EarLogo } from '../stories/helpers/ClientDataFunctions';
import IconButton from '../Components/IconButton';
import TitleCard from '../Components/TitleCard';
import IconButtonLogoRight from '../Components/IconButtonLogoRight';
import TriagePatientDataCard from '../Components/TriagePatientDataCard';

import Header from '../Components/Header';
import {
    IconArrowBarLeft,
    IconArrowBarRight,
    IconPlus,
    IconReport,
} from '@tabler/icons-react';
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
export const Triage = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center">
            <Header />
            <div className="before: flex w-[58rem] flex-col items-center justify-center gap-2">
                <TitleCard
                    title="Triage"
                    icon={EarLogo}
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
                <div className=" flex w-[58rem] flex-col gap-6 px-10">
                    <div className=" flex w-full flex-row justify-center ">
                        <div className="flex w-full flex-row justify-between gap-4 ">
                            <TriagePatientDataCard {...Patient} />
                            <div className="flex w-1/2 flex-col items-start justify-start gap-4">
                                <div>
                                    <p className="font-semibold">Pathologiën</p>
                                </div>

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
                                    backgroundColor="border-[#497DAE] bg-[#497DAE] text-white shadow-lg "
                                />
                            </div>

                            {/* <Pathology /> */}
                        </div>
                    </div>
                    <div className=" flex w-full flex-row justify-end ">
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
