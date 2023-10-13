interface TitelCardProps {
    title: string
    rightLogo: any
    button: JSX.Element
}
const TitleCard = ({ button, rightLogo, title }: TitelCardProps) => {
    return (
        <div className="h-16 w-[58rem] bg-white flex flex-row justify-between px-5 items-center rounded-full overflow-hidden   border-t border-x border-b-4 border-b-dark-green mb-4">
            <div className="flex flex-row justify-start items-center gap-2">
                <div>{rightLogo}</div>
                <div>
                    <h1 className="text-3xl text-p-text-color  flex items-center font-bold">
                        {title}
                    </h1>
                </div>
            </div>
            <div className="flexm justify-center items-center">{button}</div>
        </div>
    )
}

export default TitleCard
