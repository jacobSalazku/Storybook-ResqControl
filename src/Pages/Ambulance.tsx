import { IconDeviceFloppy, IconDoorExit } from '@tabler/icons-react';
import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import InputSelect from '../Components/InputSelect';
import TitleCard from '../Components/TitleCard';
import TreatmentMenu from '../Components/TreatmentMenu';
import { menuItems } from './Festival';
const ambulances = ['SpoedAmbulance', 'Solo Ambulance', 'Planbaar Vervoer'];
const Ambulance = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center">
            <Header />
            <div className="w-[58rem] flex flex-col justify-center items-center before: bg-white">
                <TitleCard
                    title="Ontslag"
                    icon={<IconDoorExit color="#497DAE" />}
                    rightButton={
                        <IconButton
                            label="Wijzigingen opslaan"
                            backgroundColor=" border-[#497DAE] bg-[#497DAE] text-white shadow-lg "
                            size="h-[40px] w-[193px]"
                            icon={<IconDeviceFloppy />}
                            variant="rounded-sm"
                        />
                    }
                />
            </div>
            <TreatmentMenu menuItems={menuItems} activeTitle={3} />
            <div className="w-[58rem] h-auto rounded-md mb-2 flex flex-row justify-center mt-4 pt-4">
                <div className="w-full flex flex-row flex-wrap justify-between items-center px-6 gap-x-1 gap-y-4">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">
                                            ZiekenWages/andere
                                        </p>
                                    </div>
                                    <InputSelect
                                        placeholder="Selecteer ZiekenWagen"
                                        menuItems={...ambulances}
                                        width="w-[275px]"
                                        height="h-[55px]"
                                        ringColor="bg-dark-blue"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">MUG</p>
                                    </div>
                                    <InputSelect
                                        placeholder="Selecteer MUG"
                                        menuItems={...ambulances}
                                        width="w-[275px]"
                                        height="h-[55px]"
                                        ringColor="bg-dark-blue"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">
                                            Ziekenhuis
                                        </p>
                                    </div>
                                    <InputSelect
                                        placeholder="Selecteer Ziekenhuis"
                                        menuItems={...ambulances}
                                        width="w-[275px]"
                                        height="h-[55px]"
                                        ringColor="bg-dark-blue"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">
                                            Ritnummer 112
                                        </p>
                                    </div>
                                    <input
                                        placeholder="Ritnummer dienst"
                                        className="w-[275px] h-[55px] ring-2 border-2 rounded-full px-4"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">
                                            Ritnummer dienst
                                        </p>
                                    </div>
                                    <input
                                        placeholder="Ritnummer dienst"
                                        className=" w-[275px] h-[55px] ring-2 border-2 rounded-full px-4"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h2 className="font-semibold">
                                            Conrtact(en)
                                        </h2>
                                        <p>JEFK VERMISSEN</p>
                                        <p>+324 22 33 44 55</p>
                                        <p>JEFKE VERMISSEN</p>
                                        <p>+324 22 33 44 55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ambulance;
