import Icon from '../Components/Icon';
import Menu from '../Components/Menu';
import TitleCard from '../Components/TitleCard';
import Header from '../Components/Header';
import UrgencyDashboardSmall from '../Components/UrgencyDashboardSmall';
const WaitingRoom = () => {
    return (
        <div className="w-full h-full flex flex-row justify-center">
            <div className=" max-w-[58rem]  w-[58rem]  bg-white h-fullflex flex-col items-center ">
                <div className="w-full flex flex-col">
                    <Header />
                    <TitleCard
                        title="Wacthzaal Inschrijvingen"
                        icon={
                            <Icon
                                icon="icon-tabler-armchair"
                                color="#263B54"
                                path={
                                    <>
                                        <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
                                        <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
                                        <path d="M6 19v2" />
                                        <path d="M18 19v2" />
                                    </>
                                }
                            />
                        }
                    />
                    <Menu />
                    <UrgencyDashboardSmall />
                </div>
            </div>
        </div>
    );
};

export default WaitingRoom;
