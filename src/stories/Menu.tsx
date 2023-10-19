import {
    TaskIconGreen,
    TaskIconWhite,
    TimeIconWhite,
    TimeIconGreen,
    CycleIconWhite,
    CycleIconGreen,
} from './helpers/ClientDataFunctions'
import MenuItem from './MenuItem'
import { useState } from 'react'

const Menu = () => {
    const [select, setSelect] = useState(0)
    const handleSelection = (index: number) => {
        setSelect(index)
    }

    const selectedStyle =
        ' transition ease-in-out delay-50 bg-dark-blue text-white'
    const navTitles = ['WachtZaal PreReg', 'WachtZaal Triage', 'In Behnadeling']
    return (
        <div className="w-full  flex flex-row justify-center items-center gap-3 my-4 ">
            <MenuItem
                title={navTitles[0]}
                icon={select == 0 ? TimeIconWhite : TimeIconGreen}
                border={select == 0 ? 'rounded-md shadow' : 'rounded-[1.8rem] '}
                backgroundColor={select == 0 ? selectedStyle : 'bg-white'}
                onClick={() => handleSelection(0)}
            />

            <MenuItem
                title={navTitles[1]}
                icon={select == 1 ? TaskIconWhite : TaskIconGreen}
                border={select == 1 ? 'rounded-lg' : 'rounded-[1.8rem]'}
                backgroundColor={select == 1 ? selectedStyle : 'bg-white'}
                onClick={() => handleSelection(1)}
            />

            <MenuItem
                title={navTitles[2]}
                icon={select == 2 ? CycleIconWhite : CycleIconGreen}
                backgroundColor={select == 2 ? selectedStyle : 'bg-white'}
                border={select == 2 ? 'rounded-lg' : 'rounded-[1.8rem]'}
                onClick={() => handleSelection(2)}
            />
        </div>
    )
}

export default Menu
