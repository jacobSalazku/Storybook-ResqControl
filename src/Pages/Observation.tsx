import { IconDeviceFloppy, IconNote, IconStethoscope } from "@tabler/icons-react";
import Header from "../Components/Header";
import IconButton from "../Components/IconButton";
import ObservationDash from "../Components/ObservationDash";
import TitleCard from "../Components/TitleCard";
import TreatmentMenu from "../Components/TreatmentMenu";
import { menuItems } from "./Medication";

const Observation = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center">
            <div className=" flex w-[58rem] flex-col items-center justify-center before:bg-white">
                <Header />
                <TitleCard
                    title="Basis Verzorging"
                    icon={<IconStethoscope color="#497DAE" />}
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
            <ObservationDash topLeftLogo={<IconNote color="#497DAE" stroke={1.5} />} title={"Buikepijn"} />
            <ObservationDash topLeftLogo={<IconNote color="#497DAE" stroke={1.5} />} title="Buikepijn" />
        </div>
    );
};

export default Observation;
