import greenArrow from "./icons/greenArrow.png";
import yellowArrow from "./icons/yellowArrow.png";
import redArrow from "./icons/redArrow.png";
import brownCheck from "./icons/brownCheck.png";
import deleteIcon from "./icons/deleteIcon.png";
import exitIcon from "./icons/exit-icon.png";
import sendIcon from "./icons/sendIcon.png";
import eyeLogo from "./icons/eyeLogo.png";
import nextIcon from "./icons/nextIcon.png";
import sofaIcon from "./icons/sofaIcon.png";
import deleteLogo from "./icons/deleteLogo.png";
import printIcon from "./icons/printIcon.png";
import arrowUp from "./icons/arrowUp.png";
import arrowDown from "./icons/arrowDown.png";
import prikIcon from "./icons/prikIcon.png";

export const IconExit = <img src={exitIcon}></img>;

export const SendIcon = <img src={sendIcon} alt="next"></img>;

export const EyeLogo = <img src={eyeLogo} alt="next"></img>;

export const NextIcon = <img src={nextIcon} alt="next"></img>;

export const SofaIcon = <img src={sofaIcon} alt=""></img>;

export const ExitIcon = <img src={exitIcon} alt="Exit"></img>;

export const DeleteLogo = <img src={deleteLogo} alt="Exit"></img>;

export const PrintIcon = <img src={printIcon} alt="Exit"></img>;

export const PrikIcon = <img src={prikIcon} alt="Delete" width=""></img>;
export const DeleteIcon = <img src={deleteIcon} alt="Delete" width=""></img>;
export const ArrowUp = <img src={arrowUp} alt="Delete" width=""></img>;

export const ArrowDown = <img src={arrowDown} width=""></img>;

// eslint-disable-next-line
export const getUrgencyIcon = (urgency: string | undefined) => {
    if (urgency === "T1") {
        return <img src={greenArrow} alt="minor" />;
    } else if (urgency === "T2") {
        return <img src={yellowArrow} alt="minor" />;
    } else if (urgency === "T3") {
        return <img src={redArrow} alt="minor" />;
    } else if (urgency === "base") {
        return "";
    }
};
// eslint-disable-next-line
export const getBorderColorClass = (urgency: string | undefined) => {
    if (urgency === "T1") {
        return "border-p-green";
    } else if (urgency === "T2") {
        return "border-p-yellow";
    } else if (urgency === "T3") {
        return "border-[#EE7E7A]";
    } else if (urgency === "base") {
        return "border-dark-green";
    }
};
// eslint-disable-next-line
export const getBorderBottomColorClass = (urgency: string | undefined) => {
    if (urgency === "T1") {
        return "border-b-p-green";
    } else if (urgency === "T2") {
        return "border-b-p-yellow";
    } else if (urgency === "T3") {
        return "border-[#EE7E7A]";
    } else if (urgency === "base") {
        return "border-b-dark-green";
    }
};

// eslint-disable-next-line
export const iconDelete = <img className="cursor-pointer" src={deleteIcon} alt="Delete"></img>;
// eslint-disable-next-line
export const checkingIcon = <img className="cursor-pointer" src={brownCheck} alt="Delete"></img>;
