import { TitleCardTreatmentMenu } from '../interfaces';

const TitleCardTreatmentMenu = ({
    rightButton,
    leftButton,
    icon,
    title,
    menu,
}: TitleCardTreatmentMenu) => {
    return (
        <div className="mb-4 flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-white px-10 pt-2 shadow-md">
            <div className="flex w-full flex-row items-center justify-between py-2">
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
            <div className="py-4">{menu}</div>
        </div>
    );
};

export default TitleCardTreatmentMenu;
