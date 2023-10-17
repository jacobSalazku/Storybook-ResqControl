import { useState } from 'react'
import { lozenges } from './patientData'
import {
    ArrowDown,
    ArrowUp,
    SearchIcon,
    PrikIcon,
} from './helpers/ClientDataFunctions'
import { Button } from './Button'
import { IconButton } from './iconButton'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'
import { TECollapse, TERipple } from 'tw-elements-react'

interface TreatmentDashProps {
    title: string
    topLeftLogo: JSX.Element
    searchIcon: JSX.Element
}

export const TreatmentDash = ({
    topLeftLogo,
    searchIcon,
    title,
}: TreatmentDashProps) => {
    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)

    return (
        <div className="h-16 w-[58rem] bg-white flex flex-row justify-between px-5 items-center rounded-full overflow-hidden   border-t border-x border-b-4 border-b-dark-green mb-4">
            <div className="flex flex-row justify-start items-center gap-2">
                <div>{topLeftLogo}</div>
                <div>
                    <h1 className="text-3xl text-p-text-color  flex items-center font-bold">
                        {title}
                    </h1>
                </div>
            </div>
            <div className="flex justify-center items-center cursor-pointer">
                {show ? ArrowUp : ArrowDown}
            </div>
        </div>

        /*
        <div className=" w-[59rem] h-[28rem]  bg-black flex flex-row justify-center items-center">
            <div className="w-full h-full flex flex-row justify-center bg-white">
                <div className=" maw-w-[55rem]  bg-background-color flex flex-col items-center ">
                    <TERipple rippleColor="light">
                        <div
                            className=" w-[55rem] flex flex-row justify-between items-center h-16 rounded bg-white text-xs font-medium uppercase leading-normal p-text-color shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            onClick={toggleShow}
                        >
                            <div className=" h-full w-1/2 flex flex-row justify-center">
                                <div className="flex flex-row justify-center items-center">
                                    <IconButton
                                        icon={topLeftLogo}
                                        size="w-14"
                                        backgroundColor="bg-dark-green border-dark-green"
                                        variant="rounded"
                                    />
                                    <h1 className="text-lg">{title}</h1>
                                </div>
                            </div>
                            <div>
                                <div>{searchIcon}</div>
                                <div>{show ? ArrowUp : ArrowDown}</div>
                            </div>
                        </div>
                    </TERipple>

                    <TECollapse show={show}>
                        <div className=" w-[55rem] flex- flex-row justify-center h-36 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
                            Some placeholder content for the collapse component.
                            This panel is hidden by default but revealed when
                            the user activates the relevant
                            trigger.lzefnbzlefjkbfkjbrgjrkgj Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Repudiandae
                            sunt non quae rerum eum tenetur, provident autem
                            aspernatur nam saepe ad fugiat dignissimos, expedita
                            pariatur facilis reiciendis commodi quam hic!
                        </div>
                    </TECollapse>
                </div>
            </div>
        </div>*/
    )
}

export default TreatmentDash
