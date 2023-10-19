import { SearchIcon, DeleteLogo } from './helpers/ClientDataFunctions'
import { IconButton } from './iconButton'
import InputSelect from './inputSelect'

const locatie = ['inwendig', 'uitwendig', 'ribben']
const zijde = ['Linker', 'Rechter']
const Pathology = () => {
    return (
        <div className=" h-[20rem] w-[30rem] bg-white   flex flex-col items-center  border  rounded-3xl pt-4  ">
            <div className="h-[19rem] w-[29rem]  flex flex-col items-center  px-1 ">
                <div className=" w-full flex flex-row justify-between items-center ">
                    <p className="text-lg  text-black font-medium ">
                        Pathologiën
                    </p>
                    <IconButton
                        icon={SearchIcon}
                        backgroundColor="bg-background-color"
                        variant="rounded-full"
                        size="w-32"
                    />
                </div>

                <div className=" w-full flex flex-row justify-between px-4 items-center ">
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
    )
}

export default Pathology
