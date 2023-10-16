import blueArrow from './icons/blueArrow.png'
import yellowArrow from './icons/yellowArrow.png'
import redArrow from './icons/redArrow.png'
import arrowRightGreen from './icons/arrowRightGreen.png'
import brownCheck from './icons/brownCheck.png'
import deleteIcon from './icons/deleteIcon.png'
import exitIcon from './icons/exit-icon.png'
import sendIcon from './icons/sendIcon.png'
import eyeLogo from './icons/eyeLogo.png'
import nextIcon from './icons/nextIcon.png'
import sofaIcon from './icons/sofaIcon.png'
import allergiesIcon from './icons/allergiesIcon.png'
import searchIcon from './icons/searchIcon.png'
import stethoscopeIcon from './icons/stethoscopeIcon.png'
import taskIconGreen from './icons/taskIconGreen.png'
import taskIconBrown from './icons/taskIconBrown.png'
import timeIconGreen from './icons/timeIconGreen.png'
import timeIconBrown from './icons/timeIconBrown.png'
import cycleIconGreen from './icons/cycleIconGreen.png'
import cycleIconBrown from './icons/cycleIconBrown.png'
import deleteLogo from './icons/deleteLogo.png'
import printIcon from './icons/printIcon.png'
import timeIconWhite from './icons/timeIconWhite.png'
import taskIconWhite from './icons/taskIconWhite.png'
import cycleIconWhite from './icons/cycleIconWhite.png'

export const IconExit = <img src={exitIcon}></img>

export const SendIcon = <img src={sendIcon} alt="next"></img>

export const EyeLogo = <img src={eyeLogo} alt="next"></img>

export const NextIcon = <img src={nextIcon} alt="next"></img>

export const SofaIcon = <img src={sofaIcon} alt=""></img>

export const AllergiesIcon = <img src={allergiesIcon} alt=""></img>

export const SearchIcon = <img src={searchIcon} alt="searcj"></img>

export const StethoscopeIcon = <img src={stethoscopeIcon} alt=""></img>

export const ExitIcon = <img src={exitIcon} alt="Exit"></img>

export const DeleteLogo = <img src={deleteLogo} alt="Exit"></img>

export const PrintIcon = <img src={printIcon} alt="Exit"></img>

export const TaskIconGreen = (
    <img src={taskIconGreen} alt="Delete" width=""></img>
)
export const TaskIconBrown = (
    <img src={taskIconBrown} alt="Delete" width=""></img>
)
export const TaskIconWhite = (
    <img src={taskIconWhite} alt="Delete" width=""></img>
)
export const TimeIconGreen = (
    <img src={timeIconGreen} alt="Delete" width=""></img>
)
export const TimeIconBrown = (
    <img src={timeIconBrown} alt="Delete" width=""></img>
)
export const TimeIconWhite = (
    <img src={timeIconWhite} alt="Delete" width=""></img>
)
export const CycleIconGreen = (
    <img src={cycleIconGreen} alt="Delete" width=""></img>
)
export const CycleIconBrown = (
    <img src={cycleIconBrown} alt="Delete" width=""></img>
)
export const CycleIconWhite = (
    <img src={cycleIconWhite} alt="Delete" width=""></img>
)

export const getUrgencyIcon = (urgency: string | undefined) => {
    if (urgency === 'T1') {
        return <img src={blueArrow} alt="minor" />
    } else if (urgency === 'T2') {
        return <img src={yellowArrow} alt="minor" />
    } else if (urgency === 'T3') {
        return <img src={redArrow} alt="minor" />
    } else if (urgency === 'base') {
        return ''
    }
}

export const getBorderColorClass = (urgency: string | undefined) => {
    if (urgency === 'T1') {
        return 'border-light-blue'
    } else if (urgency === 'T2') {
        return 'border-p-yellow'
    } else if (urgency === 'T3') {
        return 'border-[#B94D4D]'
    } else if (urgency === 'base') {
        return 'border-dark-green'
    }
}

export const getBorderBottomColorClass = (urgency: string | undefined) => {
    if (urgency === 'T1') {
        return 'border-b-light-blue'
    } else if (urgency === 'T2') {
        return 'border-b-p-yellow'
    } else if (urgency === 'T3') {
        return 'border-[#B94D4D]'
    } else if (urgency === 'base') {
        return 'border-b-dark-green'
    }
}

export const checkIfCompleted = (isCompleted: boolean) => {
    if (!isCompleted) {
        return (
            <img
                className="cursor-pointer"
                src={arrowRightGreen}
                alt="next"
            ></img>
        )
    }

    return (
        <img className="cursor-pointer" src={brownCheck} alt="completed"></img>
    )
}

export const iconDelete = (
    <img className="cursor-pointer" src={deleteIcon} alt="Delete"></img>
)

export const checkingIcon = (
    <img className="cursor-pointer" src={brownCheck} alt="Delete"></img>
)