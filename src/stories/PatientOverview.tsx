import { PatientDataCard } from './PatientDataCard'
import { EyeLogo, iconDelete } from './helpers/ClientDataFunctions'
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

export const PatientOverview = () => {
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
            <div className="w-full h-full bg-background-color">
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
                            <PatientDataCard {...Patient} />
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
            </div>
        </>
    )
}
