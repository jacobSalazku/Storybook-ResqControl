import {
    EyeLogo,
    SendIcon,
    SofaIcon,
} from '../stories/helpers/ClientDataFunctions'
import { IconButton } from '../Components/IconButton'
import TitleCard from '../Components/TitleCard'
import { ExitIcon } from '../stories/helpers/ClientDataFunctions'
import TriagePatientDataCard from '../Components/TriagePatientDataCard'
import Pathology from '../Components/Pathology'

export const Triage = () => {
    const Patient = {
        time: '12:50',
        urgency: 'base',
        name: 'John Doe',
        language: 'DE',
        date: '20-03',
        triageLevel: 'T2',
    }
    return (
        <div className="w-full h-screen  flex flex-col  items-center">
            <div className="w-[60rem] flex flex-col justify-center items-center before: bg-background-color py-7 gap-2">
                <TitleCard
                    title="Triage"
                    rightLogo={EyeLogo}
                    button={
                        <IconButton
                            backgroundColor="bg-dark-blue"
                            size="w-32"
                            icon={SofaIcon}
                            variant="rounded-3xl"
                        />
                    }
                />
                <div className=" flex flex-col px-10 gap-6">
                    <div className=" w-full flex flex-row justify-center ">
                        <div className="w-full flex flex-row justify-between gap-4 ">
                            <TriagePatientDataCard {...Patient} />
                            <Pathology />
                        </div>
                    </div>
                    <div className=" w-full flex flex-row justify-center ">
                        <div className="w-full flex flex-row justify-between">
                            <IconButton
                                icon={ExitIcon}
                                size="w-32"
                                variant=" rounded-full"
                                backgroundColor="bg-[#DF2935]"
                                selected={false}
                            />
                            <IconButton
                                icon={SendIcon}
                                size="w-32"
                                variant=" rounded-full"
                                backgroundColor="bg-dark-blue"
                                selected={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Triage
