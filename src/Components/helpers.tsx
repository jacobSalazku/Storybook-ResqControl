import lightBlueCheck from '../stories/helpers/icons/lightBlueCheck.png';
import Icon from './Icon';
import IconButton from './IconButton';
import {
    IconArrowBarRight,
    IconCheck,
    IconChevronDown,
    IconChevronUp,
    IconGenderFemale,
    IconGenderMale,
} from '@tabler/icons-react';

export const getGender = (gender: string) => {
    // Use a ternary expression to conditionally return JSX
    if (gender === 'Man') {
        return <IconGenderMale color="#294564" stroke={1} />;
    }
    return <IconGenderFemale color="#294564" stroke={1} />;
};

// eslint-disable-next-line
export const checkIfCompleted = (isCompleted: boolean) => {
    if (!isCompleted) {
        return <IconArrowBarRight color="#497DAE" size={36} />;
    }

    return <IconCheck color="#497DAE" size={36} />;
};

export const pointArrow = (show: boolean) => {
    if (show == false) {
        return <IconChevronDown color="#497DAE" stroke={2.5} />;
    }
    return <IconChevronUp color="#497DAE" />;
};
