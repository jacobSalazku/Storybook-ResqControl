import { patientData } from './patientData'
import SmallDataCard from './SmallDataCard'

const filteredDataStandard = patientData.filter(
    (patient) => patient.urgency === 'T1'
)
const filteredDataUrgent = patientData.filter(
    (patient) => patient.urgency === 'T2'
)
const filteredDataImmediate = patientData.filter(
    (patient) => patient.urgency === 'T3'
)

const UrgencyDashboardSmall = () => {
    return (
        <div className="w-full h-full flex flex-col flex-wrap items-center pt-8 gap-10 px-12  ">
            <div className="w-full flex flex-row flex-wrap border-t-4 border-[#DF2935] pt-3 gap-6 ">
                {filteredDataImmediate.map((patient) => (
                    <SmallDataCard key={patient.name} {...patient} />
                ))}
            </div>

            <div className="w-full flex flex-row flex-wrap  border-t-4 border-p-yellow pt-3 gap-6">
                {filteredDataUrgent.map((patient) => (
                    <SmallDataCard key={patient.name} {...patient} />
                ))}
            </div>

            <div className="w-full flex flex-row flex-wrap border-t-4 border-light-blue pt-3 gap-6">
                {filteredDataStandard.map((patient) => (
                    <SmallDataCard key={patient.id} {...patient} />
                ))}
            </div>
        </div>
    )
}

export default UrgencyDashboardSmall
