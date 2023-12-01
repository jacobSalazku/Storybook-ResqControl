import { IconArrowBarRight, IconCheck, IconGenderFemale, IconGenderMale } from "@tabler/icons-react";

export const getGender = (gender: string) => {
    if (gender === "Man") {
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
