interface wrmiProps {
    title: string;
    backgroundColor?: string;
    icon: JSX.Element;
    onClick?: () => void;
}
const MenuItem = ({ onClick, backgroundColor, title, icon }: wrmiProps) => {
    return (
        <div
            className={`w-auto h-[3rem] px-2 cursor-pointer rounded shadow-lg ${backgroundColor} `}
            onClick={onClick}
        >
            <div className="w-full h-full flex flex-row items-center justify-center gap-2">
                <div>{icon}</div>
                <p className="text-base font-ligt">{title}</p>
            </div>
        </div>
    );
};

export default MenuItem;
