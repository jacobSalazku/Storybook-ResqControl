import { UpdateIcon } from '../stories/helpers/ClientDataFunctions'
import Select from '../stories/Select'
const stringtime = ['tijd', 'tijd', 'tijd']
const dosis = ['5ml', '10ml', '15ml', '20ml']
const toedining = ['oraal', 'Intraveneus', 'intramusculair', 'subcutaan']
const MedicationCard = () => {
    return (
        <div className="w-[24rem] h-[10.5rem] border-2 border-dark-blue rounded-2xl flex flex-row">
            <div className="w-full h-full flex flex-row justify-center mx-2">
                <div className="w-full flex flex-col justify-center items-start  text-dark-blue gap-4">
                    <div>
                        <p className="text-lg font-semibold">Adrenaline</p>
                    </div>
                    <div>Epinefrine</div>
                    <div>&mg/1ml</div>
                    <div>Amp</div>
                </div>
            </div>

            <div className="w-full h-full flex flex-row justify-center  ">
                <div className="w-full flex flex-col justify-center items-start text-dark-blue gap-4">
                    <div className="border-l-2 border-dark-blue flex flex-col   items-start gap-4 pl-1 ">
                        <div className="flex flex-row gap-2">
                            <input
                                className=" w-32 border-2 rounded-2xl h-8  border-dark-blue px-2 "
                                type="time"
                            />

                            <div>{UpdateIcon}</div>
                        </div>
                        <div>
                            <Select
                                title="Dosis"
                                menuItems={...dosis}
                                ringColor="ring-dark-blue"
                                width="w-40"
                            />
                        </div>
                        <div>
                            <Select
                                title="Dosis"
                                menuItems={...toedining}
                                ringColor="ring-dark-blue"
                                width="w-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicationCard
