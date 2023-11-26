import lightBlueCheck from '../stories/helpers/icons/lightBlueCheck.png';
import Icon from './Icon';
import IconButton from './IconButton';
import {
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
        return (
            <IconButton
                variant="rounded-full"
                backgroundColor="bg-[#497DAE] border-[#497DAE]"
                size="w-9 h-9"
                icon={
                    <Icon
                        icon="icon-tabler-arrow-narrow-right"
                        color="#FFFFFF"
                        height="30"
                        width="30"
                        path={
                            <>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M5 12l14 0" />
                                <path d="M15 16l4 -4" />
                                <path d="M15 8l4 4" />
                            </>
                        }
                    />
                }
            />
        );
    }

    return (
        <img
            className="cursor-pointer"
            src={lightBlueCheck}
            alt="completed"
        ></img>
    );
};

export const pointArrow = (show: boolean) => {
    if (show == false) {
        return <IconChevronDown color="#497DAE" stroke={2.5} />;
    }
    return <IconChevronUp color="#497DAE" />;
};
