import { SofaIcon } from './helpers/ClientDataFunctions'
import { IconButton } from './iconButton'
import Menu from './Menu'
import TitleCard from './TitleCard'
import UrgencyDashboard from './UrgencyDashboard'
import UrgencyDashboardSmall from './UrgencyDashboardSmall'
const WaitingRoom = () => {
    return (
        <div className="w-full h-full flex flex-row justify-center">
            <div className=" max-w-[58rem]  w-[58rem] h-full bg-white flex flex-col items-center ">
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between px-11 py-4">
                        <div>Post Alpha - Tommorowland</div>
                        <div>Exit</div>
                    </div>
                    <Menu />
                    <TitleCard
                        rightLogo={SofaIcon}
                        title="Wacthzaal Inschrijvingen"
                    />
                    <UrgencyDashboardSmall />
                </div>
            </div>
        </div>
    )
}

export default WaitingRoom
