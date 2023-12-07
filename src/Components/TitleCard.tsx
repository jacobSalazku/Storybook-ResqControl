import { TitelCardProps } from '../interfaces';

const TitleCard = ({
    rightButton,
    leftButton,
    icon,
    title,
}: TitelCardProps) => {
    return (
        <div className="mb-4 flex h-16 w-full flex-row items-center justify-center overflow-hidden bg-white px-10 shadow-md">
            <div className="flex w-full flex-row items-center justify-between ">
                <div className="flex w-1/3 flex-row items-center justify-start">
                    {leftButton}
                </div>
                <div className="flex w-1/3 flex-row items-center justify-center">
                    <div>{icon}</div>
                    <p className="flex flex-row items-center text-2xl font-semibold text-p-text-color">
                        {title}
                    </p>
                </div>
                <div className="flex w-1/3 flex-row items-center justify-end">
                    {rightButton}
                </div>
            </div>
        </div>
    );
};

export default TitleCard;
