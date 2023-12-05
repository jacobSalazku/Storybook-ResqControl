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
            className={`${className} my-0 mb-4 flex h-14 w-full cursor-pointer flex-row content-start items-center justify-between overflow-hidden bg-white px-2 shadow-md hover:bg-white`}
        >
            <p className="justify-start text-[18px] font-medium">
                {description}
            </p>
            {checkIfCompleted(isCompleted)}
        </div>
    );
};

export default TreatmentCard;
