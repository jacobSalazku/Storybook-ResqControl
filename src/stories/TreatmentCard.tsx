import { checkIfCompleted } from './helpers/ClientDataFunctions'

interface TreatmentProps {
    description: string
    isCompleted: boolean
    onClick: () => void
    className?: string
}

const TreatmentCard = ({
    onClick,
    isCompleted,
    description,
    className,
}: TreatmentProps) => {
    return (
        <div
            onClick={onClick}
            className={` ${className} h-14 w-[33rem] bg-white flex flex-row justify-between content-start px-4 my-0 items-center border rounded-full overflow-hidden mb-4 cursor-pointer hover:bg-background-color`}
        >
            <h1 className="justify-start text-xl font-medium">{description}</h1>
            {checkIfCompleted(isCompleted)}
        </div>
    )
}

export default TreatmentCard
