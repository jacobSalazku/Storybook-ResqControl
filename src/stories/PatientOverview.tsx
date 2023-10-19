import { PatientOverviewCard } from './PatientOverviewCard'
import { EyeLogo } from './helpers/ClientDataFunctions'
import { IconButton } from './IconButton'
import TreatmentCard from './TreatmentCard'
import TitleCard from './TitleCard'
import { NextIcon } from './helpers/ClientDataFunctions'
import { useState } from 'react'

const Patient = {
    time: '12:50',
    urgency: 'base',
    name: 'John Doe',
    language: 'DE',
    date: '20',
}
interface PatientOverviewProp {
    leftButton: JSX.Element
    middleButton: JSX.Element
    rightButton: JSX.Element
}

export const PatientOverview = ({
    leftButton,
    middleButton,
    rightButton,
}: PatientOverviewProp) => {
    const [completedTreatments, setCompletedTreatments] = useState([
        false,
        false,
        false,
    ])
    const [currentTreatmentCardIndex, setCurrentTreatmentCardIndex] =
        useState(0)

    const handleClick = () => {
        const newCompletedTreatments = [...completedTreatments]

        for (let i = 0; i <= currentTreatmentCardIndex; i++) {
            newCompletedTreatments[i] = true
        }

        setCompletedTreatments(newCompletedTreatments)

        setCurrentTreatmentCardIndex(currentTreatmentCardIndex + 1)
    }

    return (
        <>
            <div className="w-full h-screen  flex flex-col  items-center">
                <div className="w-[60rem] flex flex-col justify-center items-center before: bg-white">
                    <TitleCard
                        title="Patient Overzicht"
                        rightLogo={EyeLogo}
                        button={
                            <IconButton
                                backgroundColor="bg-p-yellow border-p-yellow"
                                size="w-32"
                                icon={NextIcon}
                                variant="rounded-3xl"
                            />
                        }
                    />
                    <div className="h-[26rem] w-[58rem] bg-card-background-color  text-p-text-color flex flex-col justify-start  my-0 items-center rounded-lg overflow-hidden ">
                        <div className=" w-full flex flex-row justify-center my-6 ">
                            <div className="mx-6">
                                <PatientOverviewCard {...Patient} />
                            </div>
                            <div className=" w-full mr-4 ">
                                <TreatmentCard
                                    isCompleted={completedTreatments[0]}
                                    description="Basis Verzorging"
                                    onClick={handleClick}
                                />
                                <TreatmentCard
                                    isCompleted={completedTreatments[1]}
                                    description="Behandelingen"
                                    onClick={handleClick}
                                />
                                <TreatmentCard
                                    isCompleted={completedTreatments[2]}
                                    description="Ontslag"
                                    onClick={handleClick}
                                />
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-row justify-center items-end px-5 mt-10  ">
                            <div className=" w-full h-full flex flex-row items-center justify-between ">
                                {leftButton}
                                {middleButton}
                                {rightButton}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
