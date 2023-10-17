const TreatmentMenu = () => {
    return (
        <div className=" w-full flex flex-col items-center">
            <div className="w-[60rem]  bg-background-color h-11 flex flex-row justify-around items-center font-bold  ">
                <div className="cursor-pointer hover:border-b-2 hover:border-b-light-blue py-1 mx-1">
                    Verzorging
                </div>
                <div className=" cursor-pointer border-b-2 hover:border-b-light-blue py-1 mx-1">
                    Medicatie
                </div>
                <div className="cursor-pointer border-b-2 border-b-light-blue py-2 mx-1">
                    Materiaal
                </div>
                <div className="cursor-pointer border-b-2 border-b-light-blue py-2 mx-1">
                    Opmerkingen
                </div>
            </div>
        </div>
    )
}

export default TreatmentMenu
