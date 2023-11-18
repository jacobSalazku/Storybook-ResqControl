import { checkIfCompleted } from './helpers';
import { TreatmentProps } from '../interfaces';

const TreatmentCard = ({
    onClick,
    isCompleted,
    description,
    className,
}: TreatmentProps) => {
    return (
        <div
            onClick={onClick}
            className={`${className} h-14 w-[33rem] border-b border-dark-blue flex flex-row justify-between content-start px-4 my-0 items-center overflow-hidden mb-4 cursor-pointer hover:bg-white`}
        >
            <p className="justify-start text-xl font-medium">{description}</p>
            {checkIfCompleted(isCompleted)}
        </div>
    );
};

export default TreatmentCard;
