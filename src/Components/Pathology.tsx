import { PathologyData } from '../interfaces';
import { DeleteLogo } from '../stories/helpers/ClientDataFunctions';

import InputSelect from './InputSelect';
import Searchbar from './Searchbar';

const locatie = ['inwendig', 'uitwendig', 'ribben'];
const zijde = ['Linker', 'Rechter'];

const Pathology = ({ onDelete }: PathologyData) => {
    return (
        <div className="flex h-[60px] w-full flex-col items-center gap-4 border-b-2 px-1">
            <div className="flex w-full flex-row items-center justify-between gap-2">
                <Searchbar
                    borderColor="light-blue"
                    placeholder="Search"
                    width={130}
                    height={30}
                    borderRadius="rounded-full"
                />
                <div>
                    <InputSelect menuItems={locatie} title="Locatie" />
                </div>

                <div>
                    <InputSelect menuItems={zijde} title="Zijde" />
                </div>
                <div className="pt-2">
                    <button onClick={() => onDelete}>{DeleteLogo}</button>
                </div>
            </div>
        </div>
    );
};

export default Pathology;
