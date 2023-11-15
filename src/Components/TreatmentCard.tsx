import { checkIfCompleted } from "../stories/helpers/ClientDataFunctions";

interface TreatmentProps {
  description: string;
  isCompleted: boolean;
  onClick: () => void;
  className?: string;
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
      className={` ${className} h-14 w-[33rem] bg-background-color flex flex-row justify-between content-start px-4 my-0 items-center  rounded-full overflow-hidden mb-4 cursor-pointer hover:bg-white`}
    >
      <p className="justify-start text-xl font-medium">{description}</p>
      {checkIfCompleted(isCompleted)}
    </div>
  );
};

export default TreatmentCard;
