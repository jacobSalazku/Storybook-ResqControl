import Menu from "../Components/Menu";
import TitleCard from "../Components/TitleCard";
import Header from "../Components/Header";
import UrgencyDashboardSmall from "../Components/UrgencyDashboardSmall";
import { IconArmchair } from "@tabler/icons-react";

const WaitingRoom = () => {
    return (
        <div className="flex h-full w-full flex-row justify-center">
            <div className=" h-fullflex  w-[58rem]  max-w-[58rem] flex-col items-center bg-white ">
                <div className="flex w-full flex-col">
                    <Header />
                    <TitleCard title="Wacthzaal Inschrijvingen" icon={<IconArmchair color="  #497DAE" size={35} />} />
                    <Menu />
                    <UrgencyDashboardSmall />
                </div>
            </div>
        </div>
    );
};

export default WaitingRoom;
