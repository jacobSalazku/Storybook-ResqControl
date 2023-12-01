import { checkIfCompleted } from "./helpers";
import { TreatmentProps } from "../interfaces";

const TreatmentCard = ({ onClick, isCompleted, description, className }: TreatmentProps) => {
    return (
        <div
            onClick={onClick}
            className={`${className} my-0 mb-4 flex h-14 w-[33rem] cursor-pointer flex-row content-start items-center justify-between overflow-hidden border-b border-dark-blue px-4 hover:bg-white`}
        >
            <p className="justify-start text-xl font-medium">{description}</p>
            {checkIfCompleted(isCompleted)}
        </div>
    );
};

export default TreatmentCard;
