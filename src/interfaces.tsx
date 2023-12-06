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
    HandleOptions?: () => void;
    height?: string;
    shadow?: string;
    border?: string;
}

export interface TriageOption {
    selected?: boolean | null;
    label: string;
    backgroundColor?: string | void;
    selectedColor: string;
}

export interface iconProps {
    width?: string;
    height?: string;
    color: string;
    icon: string;
    path: JSX.Element;
}
/* eslint-disable */
export interface IconButtonProps {
    label?: string;
    variant: string;
    backgroundColor: string;
    size: string;
    icon: JSX.Element | any;
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
    icon?: JSX.Element;
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
    searchBar?: JSX.Element;
    Itemsarr?: string[];
}

export interface menuProps {
    activeTitle: number;
    menuItems: string[];
}
export interface Lozenge {
    id: number;
    name: string;
    selected: boolean;
}

export interface TextAreaProps {
    title: string;
    width?: string;
    height?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder: string;
    border?: string;
    icon?: JSX.Element;
}

export interface InputProps {
    label: string;
    templateStr?: string;
    size: string;
    placeholder?: string;
    value?: string | number;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    border?: string;
    required?: boolean;
    spanString?: string;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface PathologyData {
    location: string;
    side: string;
    onDelete?: (index: number) => void;
    index?: number;
}
