interface wrmiProps {
    title: string
    border: string
    backgroundColor?: any
    icon: JSX.Element
    onClick?: () => void
}
const MenuItem = ({
    onClick,
    backgroundColor,
    title,
    icon,
    border,
}: wrmiProps) => {
    return (
        <div
            className={`w-[11.5rem] h-[5.25rem] cursor-pointer  ${backgroundColor} ${border}`}
            onClick={onClick}
        >
            <div className=" w-[11.5rem] h-[5.25rem] flex flex-col items-center justify-around">
                <div>{icon}</div>
                <p className="text-base font-bold">{title}</p>
            </div>
        </div>
    )
}

export default MenuItem
