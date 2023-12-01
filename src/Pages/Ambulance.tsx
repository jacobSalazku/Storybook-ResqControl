import { IconDeviceFloppy, IconDoorExit } from "@tabler/icons-react";
import Header from "../Components/Header";
import IconButton from "../Components/IconButton";
import TitleCard from "../Components/TitleCard";
import TreatmentMenu from "../Components/TreatmentMenu";
import { menuItems } from "./Festival";
import InputSelect from "../Components/InputSelect";

const ambulances = ["SpoedAmbulance", "Solo Ambulance", "Planbaar Vervoer"];
const Ambulance = () => {
    return (
        <div className="flex h-auto max-w-[58rem] flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center bg-white ">
                <Header />
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
            <div className="mb-2 mt-4 flex h-auto w-[58rem] flex-row justify-center rounded-md pt-4">
                <div className="flex w-full flex-row flex-wrap items-center justify-between gap-x-1 gap-y-4 px-6">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">ZiekenWages/andere</p>
                                    </div>
                                    <InputSelect
                                        placeholder="Selecteer ZiekenWagen"
                                        menuItems={ambulances}
                                        width="w-[275px]"
                                        height="h-[55px]"
                                        // ringColor="bg-dark-blue"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">MUG</p>
                                    </div>
                                    <InputSelect
                                        placeholder="Selecteer MUG"
                                        menuItems={ambulances}
                                        width="w-[275px]"
                                        height="h-[55px]"
                                        // ringColor="bg-dark-blue"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">Ziekenhuis</p>
                                    </div>
                                    <InputSelect
                                        placeholder="Selecteer Ziekenhuis"
                                        menuItems={...ambulances}
                                        width="w-[275px]"
                                        height="h-[55px]"
                                        //ringColor="bg-dark-blue"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">Ritnummer 112</p>
                                    </div>
                                    <input placeholder="Ritnummer dienst" className="h-[55px] w-[275px] rounded-full border-2 px-4 ring-2" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold">Ritnummer dienst</p>
                                    </div>
                                    <input placeholder="Ritnummer dienst" className=" h-[55px] w-[275px] rounded-full border-2 px-4 ring-2" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h2 className="font-semibold">Conrtact(en)</h2>
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
