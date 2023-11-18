import { UpdateIcon } from '../stories/helpers/ClientDataFunctions';
import Select from '../stories/Select';

const dosis = ['5ml', '10ml', '15ml', '20ml'];
const toedining = ['oraal', 'Intraveneus', 'intramusculair', 'subcutaan'];
const MedicationCard = () => {
    return (
        <>
            <div className=" relative w-[16.5rem] h-[24.5rem] border-2 border-dark-blue rounded-3xl pt-5">
                {/** <div className=" w-[17rem] h-4 flex flex-row justify-end absolute mb-1 top-0 right-4">
                    <IconButton
                        icon={DeleteIcon}
                        size="w-12"
                        variant="rounded-full"
                        backgroundColor="bg-[#EE7E7A] border-dark-blue"
                    />
                </div>
            */}
                <div className="flex flex-col px-4">
                    <div className="w-full h-full flex flex-row items-center justify-center ">
                        <div className="w-full flex flex-col justify-center items-center text-dark-blue gap-4 border-b-2 border-dark-blue pb-4">
                            <div>
                                <p className="text-lg font-semibold">
                                    Adrenaline
                                </p>
                            </div>
                            <div>
                                <p>Epinefrine</p>
                            </div>
                            <div>
                                <p className="text-[#35393C]">&mg/1ml</p>
                            </div>
                            <div>
                                <p>Amp</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-row justify-center pt-4">
                        <div className="w-full flex flex-col justify-center items-center text-dark-blue gap-4">
                            <div className="flex flex-col items-start gap-4 pl-1">
                                <div className="flex flex-row gap-2">
                                    <input
                                        className="w-40 border-2 rounded-2xl h-8 border-dark-blue px-2 "
                                        type="time"
                                    />

                                    <div>{UpdateIcon}</div>
                                </div>
                                <div>
                                    <Select
                                        title="Dosis"
                                        menuItems={...dosis}
                                        ringColor="ring-dark-blue"
                                        width="w-56"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="w-56 border-2 rounded-2xl h-8 border-dark-blue px-2"
                                        type="text"
                                        placeholder="Dosis"
                                    />
                                </div>
                                <div>
                                    <Select
                                        title="Toedening"
                                        menuItems={...toedining}
                                        ringColor="ring-dark-blue"
                                        width="w-56"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MedicationCard;
