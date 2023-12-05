import {
    IconArrowBigRightLines,
    IconCheck,
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
        return <IconArrowBigRightLines color="#3A638A" size={24} />;
    }
    return <IconCheck color="#3A638A" size={24} />;
};
