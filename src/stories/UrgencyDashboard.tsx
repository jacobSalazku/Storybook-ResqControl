import { patientData } from './patientData'
import { PatientDataCard } from './PatientDataCard'

const filteredDataStandard = patientData.filter(
    (patient) => patient.urgency === 'T1'
)
const filteredDataUrgent = patientData.filter(
    (patient) => patient.urgency === 'T2'
)
const filteredDataImmediate = patientData.filter(
    (patient) => patient.urgency === 'T3'
)

const UrgencyDashboard = () => {
    return (
        <div className=" w-full h-full flex flex-col items-center">
            <div className="w-[60rem] h-full flex flex-col flex-wrap items-center bg-background-color pt-8 gap-10 px-20  ">
                <div className="w-full flex flex-row flex-wrap border-t-4 border-[#B94D4D] pt-3 gap-6 ">
                    {filteredDataImmediate.map((patient) => (
                        <PatientDataCard key={patient.name} {...patient} />
                    ))}
                </div>

                <div className="w-full flex flex-row flex-wrap  border-t-4 border-p-yellow pt-3 gap-6">
                    {filteredDataUrgent.map((patient) => (
                        <PatientDataCard key={patient.name} {...patient} />
                    ))}
                </div>

                <div className="w-full flex flex-row flex-wrap border-t-4 border-light-blue pt-3 gap-6">
                    {filteredDataStandard.map((patient) => (
                        <PatientDataCard key={patient.id} {...patient} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UrgencyDashboard
