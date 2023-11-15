interface TitelCardProps {
    title: string;
    rightButton?: JSX.Element;
    leftButton?: JSX.Element;
    icon: JSX.Element;
}
const TitleCard = ({
    rightButton,
    leftButton,
    icon,
    title,
}: TitelCardProps) => {
    return (
        <div className="h-16 w-[58rem] flex flex-row justify-center px-5 items-center shadow-md overflow-hidden bg-background-color mb-4">
            <div className="w-full flex flex-row justify-between items-center gap-2">
                <div>{leftButton}</div>
                <div className="flex flex-row items-center gap-2">
                    <div>{icon}</div>
                    <p className="text-2xl text-p-text-color  flex  flex-row  items-center font-medium">
                        {title}
                    </p>
                </div>
                <div className="flexm justify-center items-center">
                    {rightButton}
                </div>
            </div>
        </div>
    );
};

export default TitleCard;
