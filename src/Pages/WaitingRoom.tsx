import Menu from '../Components/Menu';
import TitleCard from '../Components/TitleCard';
import Header from '../Components/Header';
import UrgencyDashboardSmall from '../Components/UrgencyDashboardSmall';
import { IconArmchair } from '@tabler/icons-react';
const WaitingRoom = () => {
    return (
        <div className="w-full h-full flex flex-row justify-center">
            <div className=" max-w-[58rem]  w-[58rem]  bg-white h-fullflex flex-col items-center ">
                <div className="w-full flex flex-col">
                    <Header />
                    <TitleCard
                        title="Wacthzaal Inschrijvingen"
                        icon={<IconArmchair color="  #497DAE" size={35} />}
                    />
                    <Menu />
                    <UrgencyDashboardSmall />
                </div>
            </div>
        </div>
    );
};

export default WaitingRoom;
