import { IconDeviceFloppy, IconDoorExit, IconNote } from "@tabler/icons-react";
import Header from "../Components/Header";
import IconButton from "../Components/IconButton";
import InputTextArea from "../Components/InputTextArea";
import TitleCard from "../Components/TitleCard";
import TreatmentMenu from "../Components/TreatmentMenu";
import { menuItems } from "./Festival";

const Referral = () => {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-center">
            <Header />
            <div className="before: flex flex-col items-center justify-center bg-white">
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
            <TreatmentMenu menuItems={menuItems} activeTitle={2} />
            <div className="mb-2 mt-4 flex h-auto w-[58rem] flex-row justify-center rounded-md border-8 border-white">
                <div className="flex w-full flex-row flex-wrap items-center justify-between gap-x-1 gap-y-4 px-6">
                    <InputTextArea
                        title="Opmerkingen"
                        icon={<IconNote color="#497DAE" size={40} stroke={1} />}
                        border="rounded-xl"
                        height="h-[235px]"
                        placeholder="Opmerkingen"
                    />
                </div>
            </div>
        </div>
    );
};

export default Referral;
