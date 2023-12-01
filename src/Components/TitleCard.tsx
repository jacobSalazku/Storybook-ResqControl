import { TitelCardProps } from "../interfaces";

const TitleCard = ({ rightButton, leftButton, icon, title }: TitelCardProps) => {
    return (
        <div className="mb-4 flex h-16 w-full flex-row items-center justify-center overflow-hidden bg-background-color px-10 shadow-md">
            <div className="flex w-full flex-row items-center justify-between ">
                <div>{leftButton}</div>
                <div className="flex flex-row items-center gap-2">
                    <div>{icon}</div>
                    <p className="flex flex-row items-center text-2xl font-medium text-p-text-color">{title}</p>
                </div>
                <div className="flex items-center justify-center">{rightButton}</div>
            </div>
        </div>
    );
};

export default TitleCard;
