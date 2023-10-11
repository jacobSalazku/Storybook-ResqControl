import { PatientDataCard } from './PatientDataCard'
import { Button } from './Button'
import ExitIcon from './helpers/icons/ExitICon'
import sendIcon from './icons/send.png'
import { checkIfCompleted } from './helpers/ClientDataFunctions'

interface PatientOverviewInterface {
    isCompleted: boolean
}

export const PatientOverview = ({ isCompleted }: PatientOverviewInterface) => {
    const patientProps = {
        time: '12/:50',
        urgency: 'T2',
        name: 'jacob',
        language: 'DE',
        date: '20-03',
    }
    return (
        <>
            <div className="h-16 w-[58rem] bg-white  flex flex-column justify-start content-center px-8 my-0 items-center  rounded-lg overflow-hidden border-2 shadow-md mb-4">
                <h1 className=" text-3xl text-black justify-start">
                    Patiënt Overzicht
                </h1>
            </div>

            <div className="h-[36rem] bg-white w-[58rem] flex flex-col justify-start content-center  my-0 items-center rounded-lg overflow-hidden border-2 shadow-md">
                <div className=" w-full flex flex-row justify-center my-6 ">
                    <div className="mx-6">
                        <PatientDataCard {...patientProps}></PatientDataCard>
                    </div>
                    <div className=" w-full mr-4 ">
                        <div className="h-16 bg-white w-full flex flex-row justify-between content-start px-8 my-0 items-center  rounded-lg overflow-hidden border-2 shadow-md mb-4">
                            <h1 className="justify-start text-sm text-black">
                                Basis verzorging
                            </h1>
                            {checkIfCompleted(isCompleted)}
                        </div>
                        <div className="h-16 bg-white w-full flex flex-row justify-between  content-start px-8 my-0 items-center rounded-lg overflow-hidden border-2 shadow-md mb-4">
                            <h1 className="justify-start text-sm text-black">
                                Behandelingen
                            </h1>
                            {checkIfCompleted(isCompleted)}
                        </div>
                        <div className="h-16 bg-white w-full flex flex-row justify-between content-start px-8 my-0 items-center rounded-lg overflow-hidden border-2 shadow-md mb-4">
                            <h1 className="justify-start text-sm text-black">
                                Ontslag
                            </h1>
                            {checkIfCompleted(isCompleted)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row  justify-around mt-32  ">
                    <Button
                        backgroundColor="bg-[#EF4444] text-white"
                        icon={<ExitIcon />}
                        label="Exit"
                        size="w-32"
                        variant="small"
                    />
                </div>
            </div>
        </>
    )
}
