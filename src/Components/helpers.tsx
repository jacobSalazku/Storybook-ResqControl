import {
    IconArrowBarRight,
    IconCheck,
    IconChevronDown,
    IconChevronUp,
    IconGenderFemale,
    IconGenderMale,
} from '@tabler/icons-react';

export const getGender = (gender: string) => {
    if (gender === 'Man') {
        return <IconGenderMale color="#294564" stroke={1} />;
    }
    return <IconGenderFemale color="#294564" stroke={1} />;
};

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
