// define object
export interface ButtonProps {
    primary?: boolean;
    variant: string;
    backgroundColor?: string | void;
    size: string;
    label: string;
    icon?: JSX.Element;
    selected?: boolean | null;
    onClick?: () => void;
    height?: string;
}

export interface iconProps {
    width?: string;
    height?: string;
    color: string;
    icon: string;
    path: JSX.Element;
}

export interface IconButtonProps {
    label?: string;
    variant: string;
    backgroundColor: string;
    size: string;
    icon: JSX.Element;
    selected?: boolean;
    hover?: string;
    onClick?: () => void;
}

export interface MenuItemProps {
    title: string;
    backgroundColor?: string;
    icon: JSX.Element;
    onClick?: () => void;
}

/** Card with all the Patient information */
export interface PatientProps {
    name: string;
    language: string;
    urgency?: string;
    time: string;
    gender: string;
    nationality: string;
    dateOfBirth: string;
    allergies: boolean;
}

export interface TitelCardProps {
    title: string;
    rightButton?: JSX.Element;
    leftButton?: JSX.Element;
    icon: JSX.Element;
}

export interface TreatmentProps {
    description: string;
    isCompleted: boolean;
    onClick: () => void;
    className?: string;
}

export interface TreatmentDashProps {
    title: string;
    topLeftLogo: JSX.Element;
    searchIcon?: JSX.Element;
}

export interface menuProps {
    activeTitle: number;
    menuItems: string[];
}
