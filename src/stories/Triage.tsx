import { PatientDataCard } from './PatientDataCard'
import { EyeLogo, iconDelete } from './helpers/ClientDataFunctions'
import { IconButton } from './IconButton'

import TitleCard from './TitleCard'
import { NextIcon } from './helpers/ClientDataFunctions'

export const Triage = () => {
    const Patient = {
        time: '12:50',
        urgency: 'base',
        name: 'John Doe',
        language: 'DE',
        date: '20-03',
    }
    return (
        <>
            <TitleCard
                title="Patient Overzicht"
                rightLogo={EyeLogo}
                button={
                    <IconButton
                        backgroundColor="bg-[#F59E0B]"
                        size="w-32"
                        icon={NextIcon}
                        variant="rounded-3xl"
                    />
                }
            />
            <div className="h-[26rem] w-[58rem] bg-card-background-color  text-p-text-color flex flex-col justify-start  my-0 items-center rounded-lg overflow-hidden ">
                <div className=" w-full flex flex-row justify-center my-6 ">
                    <div className="mx-6">
                        <PatientDataCard {...Patient}></PatientDataCard>
                    </div>
                    <div className=" w-full mr-4 "></div>
                </div>
                <div
                    className="w-full h-full flex flex-row justify-start items-end ml-11
                mb-4  "
                >
                    {
                        <IconButton
                            backgroundColor="bg-[#B94D4D]"
                            size="w-32"
                            variant="rounded-full"
                            icon={iconDelete}
                        />
                    }
                </div>
            </div>
        </>
    )
}
export default Triage
