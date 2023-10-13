import { SearchIcon } from './helpers/ClientDataFunctions'
import { IconButton } from './iconButton'

const Pathology = () => {
    return (
        <div className="h-[19rem] w-[29rem]  flex flex-col items-center  border  rounded-3xl pt-4  ">
            <div className="h-[19rem] w-[29rem]  flex flex-col items-center  px-5 ">
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
                <div className="w-full h-11 bg-dark-green  flex justify-center items-center border rounded-full my-4">
                    <div className=" w-full flex flex-row justify-between px-4 ">
                        <div>Patholgie</div>
                        <div>Locatie</div>
                        <div>Zijde</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pathology
