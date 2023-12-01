import { DeleteLogo } from "../stories/helpers/ClientDataFunctions";
import { useState } from "react";
import InputSelect from "./InputSelect";
import Searchbar from "./Searchbar";
import { PathologyData } from "../interfaces";

const locatie = ["inwendig", "uitwendig", "ribben"];
const zijde = ["Linker", "Rechter"];

const Pathology = ({ location, side, onDelete }: PathologyData) => {
    const [selectedLocation, setSelectedLocation] = useState<string>(location);
    const [selectedSide, setSelectedSide] = useState<string>(side);

    return (
        <div className="flex h-[60px] w-[29rem] flex-col items-center gap-4 border-b-2 px-1">
            <div className="flex w-full flex-row items-center justify-between gap-2">
                <Searchbar borderColor="light-blue" placeholder="Search" width={130} height={30} borderRadius="rounded-full" />
                <div>
                    <InputSelect menuItems={locatie} title="Locatie" onChange={(value) => setSelectedLocation(value)} value={selectedLocation} />
                </div>

                <div>
                    <InputSelect menuItems={zijde} title="Zijde" onChange={(value) => setSelectedSide(value)} value={selectedSide} />
                </div>
                <div className="pt-2">
                    <button onClick={() => onDelete}>{DeleteLogo}</button>
                </div>
            </div>
        </div>
    );
};

export default Pathology;
