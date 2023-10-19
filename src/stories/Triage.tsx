import { EyeLogo, SendIcon, SofaIcon } from './helpers/ClientDataFunctions'
import { IconButton } from './IconButton'
import TitleCard from './TitleCard'
import { ExitIcon } from './helpers/ClientDataFunctions'
import TriagePatientDataCard from './TriagePatientDataCard'
import Pathology from './Pathology'

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
                                backgroundColor="bg-[#B94D4D]"
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
