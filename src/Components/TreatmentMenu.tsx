const TreatmentMenu = () => {
    return (
        <div className=" w-full flex flex-col items-center">
            <div className="w-[60rem]  bg-background-color h-11 flex flex-row justify-center items-center font-bold gap-16  ">
                <div className="cursor-pointer hover:border-b-2 border-b-light-blue p-2">
                    <p>Verzorging</p>
                </div>
                <div className=" cursor-pointer  hover:border-b-2 border-b-light-blue p-2">
                    <p>Medicatie</p>
                </div>
                <div className="cursor-pointer hover:border-b-2 border-b-light-blue p-2">
                    <p>Materiaal</p>
                </div>
                <div className="cursor-pointer hover:border-b-2 border-b-light-blue p-2">
                    <p>Opmerkingen</p>
                </div>
            </div>
        </div>
    )
}

export default TreatmentMenu
