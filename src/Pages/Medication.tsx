import { IconDeviceFloppy, IconSearch, IconStethoscope, IconVaccine } from "@tabler/icons-react";
import Header from "../Components/Header";
import IconButton from "../Components/IconButton";
import TitleCard from "../Components/TitleCard";
import LargeTreatmentDash from "../Components/LargeTreatmentDash";
import TreatmentMenu from "../Components/TreatmentMenu";
import { useState } from "react";

export const menuItems = ["Verzorging", "Medicatie", "Materiaal", "Opmerkingen"];
const Medication = () => {
    const [isSearchInputVisible, setSearchInputVisible] = useState(false);
    const toggleSearchInput = () => {
        setSearchInputVisible(!isSearchInputVisible);
    };

    return (
        <div className="flex h-auto max-w-[58rem] flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center bg-white ">
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
            <TreatmentMenu menuItems={menuItems} activeTitle={1} />
            <LargeTreatmentDash
                title="Buikpijn"
                topLeftLogo={<IconVaccine color="#497DAE" />}
                searchIcon={
                    <IconButton
                        icon={<IconSearch color="#497DAE" />}
                        variant="rounded-full"
                        size="w-[130px] h-[40px]"
                        backgroundColor="border-light-blue"
                        onClick={toggleSearchInput}
                    />
                }
            />
        </div>
    );
};

export default Medication;
