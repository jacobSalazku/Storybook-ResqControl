import { patientData } from "./patientData";
import SmallDataCard from "./SmallDataCard";

const filteredDataStandard = patientData.filter((patient) => patient.urgency === "T1");
const filteredDataUrgent = patientData.filter((patient) => patient.urgency === "T2");
const filteredDataImmediate = patientData.filter((patient) => patient.urgency === "T3");

const UrgencyDashboardSmall = () => {
    return (
        <div className="flex h-full w-full flex-col flex-wrap items-center gap-10 px-5 pt-8 ">
            <div className="flex w-full flex-row flex-wrap gap-4 ">
                {filteredDataImmediate.map((patient) => (
                    <SmallDataCard key={patient.name} {...patient} />
                ))}

                {filteredDataUrgent.map((patient) => (
                    <SmallDataCard key={patient.name} {...patient} />
                ))}

                {filteredDataStandard.map((patient) => (
                    <SmallDataCard key={patient.id} {...patient} />
                ))}
            </div>
        </div>
    );
};

export default UrgencyDashboardSmall;
