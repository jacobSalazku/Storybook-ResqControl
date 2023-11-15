import Icon from './icon';
import lightBlueCheck from '../stories/helpers/icons/lightBlueCheck.png';
import IconButton from './IconButton';
export const getGender = (gender: string) => {
    // Use a ternary expression to conditionally return JSX
    if (gender === 'Man') {
        return (
            <div>
                <Icon
                    icon="icon-tabler-gender-male"
                    color="#294564"
                    path={
                        <>
                            <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                            <path d="M19 5l-5.4 5.4" />
                            <path d="M19 5h-5" />
                            <path d="M19 5v5" />
                        </>
                    }
                />
            </div>
        );
    }
    return (
        <div>
            <Icon
                icon="icon-tabler-gender-female"
                color="#294564"
                path={
                    <>
                        <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                        <path d="M12 14v7" />
                        <path d="M9 18h6" />
                    </>
                }
            />
        </div>
    );
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
