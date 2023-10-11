import greenArrow from './icons/greenArrow.png'
import yellowArrow from './icons/yellowArrow.png'
import redArrow from './icons/redArrow.png'
import arrowRightBlue from './icons/arrowRightBlue.png'
import greenCheck from './icons/greenCheck.png'

export const getUrgencyIcon = (urgency: string | undefined) => {
    if (urgency === 'T1') {
        return <img src={greenArrow} alt="minor" />
    } else if (urgency === 'T2') {
        return <img src={yellowArrow} alt="minor" />
    } else if (urgency === 'T3') {
        return <img src={redArrow} alt="minor" />
    }
}
export const getUrgencyGradientClass = (urgency: string | undefined) => {
    if (urgency === 'T1') {
        return 'bg-gradient-to-r from-white to-light-green'
    } else if (urgency === 'T2') {
        return 'bg-gradient-to-r from-white to-p-yellow'
    } else if (urgency === 'T3') {
        return 'bg-gradient-to-r from-white to-p-red'
    }
}

export const checkIfCompleted = (isCompleted: boolean) => {
    if (!isCompleted) {
        return (
            <img
                className="cursor-pointer"
                src={arrowRightBlue}
                alt="next"
            ></img>
        )
    }

    return <img className="cursor-pointer" src={greenCheck} alt="next"></img>
}
