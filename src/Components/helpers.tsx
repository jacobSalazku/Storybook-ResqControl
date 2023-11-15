import Icon from './icon';
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
