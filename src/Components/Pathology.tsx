import { DeleteLogo } from '../stories/helpers/ClientDataFunctions';
import IconButton from './IconButton';
import { IconSearch } from '@tabler/icons-react';
import InputSelect from './InputSelect';

const locatie = ['inwendig', 'uitwendig', 'ribben'];
const zijde = ['Linker', 'Rechter'];
const Pathology = () => {
    return (
        <div className="flex h-[20rem] w-[30rem] flex-col items-center rounded-3xl border bg-white pt-4">
            <div className="flex h-[19rem] w-[29rem] flex-col items-center  px-1 ">
                <div className="flex w-full flex-row items-center justify-between ">
                    <p className="text-lg font-medium text-black ">
                        Pathologiën
                    </p>
                    <IconButton
                        icon={<IconSearch />}
                        backgroundColor="bg-background-color"
                        variant="rounded-full"
                        size="w-32"
                    />
                </div>

                <div className="flex w-full flex-row items-center justify-between px-4 ">
                    <div className="pt-2">{DeleteLogo}</div>
                    <div>Patholgie</div>
                    <div>
                        <InputSelect menuItems={...locatie} title="Locatie" />
                    </div>

                    <div>
                        <InputSelect menuItems={...zijde} title="Zijde" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pathology;
