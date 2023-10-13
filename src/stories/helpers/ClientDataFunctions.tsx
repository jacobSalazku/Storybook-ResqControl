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

export const IconExit = <img src={exitIcon}></img>

export const SendIcon = <img src={sendIcon} alt="next"></img>

export const EyeLogo = <img src={eyeLogo} alt="next"></img>

export const NextIcon = <img src={nextIcon} alt="next"></img>

export const SofaIcon = <img src={sofaIcon} alt="next"></img>

export const AllergiesIcon = <img src={allergiesIcon} alt="next"></img>

export const SearchIcon = <img src={searchIcon} alt="next"></img>

export const StethoscopeIcon = <img src={stethoscopeIcon} alt="next"></img>

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
        return 'border-dark-red'
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
        return 'border-b-dark-red'
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
