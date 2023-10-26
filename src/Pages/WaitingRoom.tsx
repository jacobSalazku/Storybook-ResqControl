import { SofaIcon } from '../stories/helpers/ClientDataFunctions'
import Menu from '../Components/Menu'
import TitleCard from '../Components/TitleCard'

import UrgencyDashboardSmall from '../Components/UrgencyDashboardSmall'
const WaitingRoom = () => {
    return (
        <div className="w-full h-full flex flex-row justify-center">
            <div className=" max-w-[58rem]  w-[58rem]  bg-white h-fullflex flex-col items-center ">
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