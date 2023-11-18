import { EarLogo, SendIcon } from '../stories/helpers/ClientDataFunctions';
import IconButton from '../Components/IconButton';
import TitleCard from '../Components/TitleCard';
import IconButtonLogoRight from '../Components/IconButtonLogoRight';
import TriagePatientDataCard from '../Components/TriagePatientDataCard';
import Icon from '../Components/icon';
import Header from '../Components/Header';
import { IconPlus, IconReport } from '@tabler/icons-react';
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
        <div className="w-full h-screen flex flex-col  items-center">
            <Header />
            <div className="w-[58rem] flex flex-col justify-center items-center before: gap-2">
                <TitleCard
                    title="Triage"
                    icon={EarLogo}
                    leftButton={
                        <IconButton
                            label="Triage Annuleren"
                            size="h-[40px] w-[171px]"
                            icon={
                                <Icon
                                    icon="icon-tabler-send"
                                    color="#FFFFFF"
                                    height="20"
                                    width="20"
                                    path={
                                        <>
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                                x="10"
                                                y="10"
                                                width="30"
                                                height="20"
                                            />
                                            <path d="M14 10l-11 11" />
                                            <path d="M3 21l6.5 -18a.55 .55 0 0 1 1 0l3.5 7l7 3.5a.55 .55 0 0 1 0 1l-18 6.5" />
                                        </>
                                    }
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
                <div className=" w-[58rem] flex flex-col px-10 gap-6">
                    <div className=" w-full flex flex-row justify-center ">
                        <div className="w-full flex flex-row justify-between gap-4 ">
                            <TriagePatientDataCard {...Patient} />
                            <div className="w-1/2 flex flex-col justify-start items-start gap-4">
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
                    <div className=" w-full flex flex-row justify-end ">
                        <IconButtonLogoRight
                            label="Patient Behandelen"
                            icon={SendIcon}
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
