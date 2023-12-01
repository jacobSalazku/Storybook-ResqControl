import { IconDeviceFloppy, IconStethoscope, IconVaccine } from "@tabler/icons-react";
import Header from "../Components/Header";
import IconButton from "../Components/IconButton";
import MedicationDash from "../Components/MedicationDash";
import TitleCard from "../Components/TitleCard";
import TreatmentMenu from "../Components/TreatmentMenu";
import { menuItems } from "./Medication";

const TreatmentMedication = () => {
    return (
        <div className="flex h-auto max-w-[58rem] flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center bg-white ">
                <Header />
                <TitleCard
                    title="Behandeling"
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
            <TreatmentMenu menuItems={menuItems} activeTitle={2} />
            <MedicationDash title="Medicatie" topLeftLogo={<IconVaccine color="#497DAE" />} />
        </div>
    );
};

export default TreatmentMedication;
