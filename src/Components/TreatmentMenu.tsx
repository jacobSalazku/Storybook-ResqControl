import { useState } from 'react'

const TreatmentMenu = () => {
    const [select, setSelect] = useState(false) // Set the initial state to true for one item

    const activateMenu = () => {
        select ? setSelect(true) : setSelect(false)
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-[60rem] bg-background-color h-11 flex flex-row justify-center items-center font-bold gap-16">
                <div
                    className={`cursor-pointer hover:border-b-2 border-b-light-blue p-2 ${
                        select ? 'border-b-light-blue  border-b-2' : ''
                    }`}
                    onClick={activateMenu}
                >
                    <p>Verzorging</p>
                </div>
                <div
                    className={`cursor-pointer hover:border-b-2 border-b-light-blue p-2 ${
                        select ? 'border-b-light-blue  border-b-2' : ''
                    }`}
                    onClick={activateMenu}
                >
                    <p>Medicatie</p>
                </div>
                <div
                    className={`cursor-pointer hover:border-b-2 border-b-light-blue p-2 ${
                        select ? 'border-b-light-blue  border-b-2' : ''
                    }`}
                    onClick={activateMenu}
                >
                    <p>Materiaal</p>
                </div>
                <div
                    className={`cursor-pointer hover:border-b-2 border-b-light-blue p-2 ${
                        select ? 'border-b-light-blue  border-b-2' : ''
                    }`}
                    onClick={activateMenu}
                >
                    <p>Opmerkingen</p>
                </div>
            </div>
        </div>
    )
}

export default TreatmentMenu
