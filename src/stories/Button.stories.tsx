import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

import { ExitIcon } from './helpers/ClientDataFunctions'
import CheckIcon from './icons/checkIcon'

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    title: 'Button',
    argTypes: {
        backgroundColor: {
            control: { type: 'select' },
            options: {
                'Dark Blue': 'bg-[#1E293B] text-white ',
                'Light Blue': 'bg-light-blue text-white border-light-blue',
                'Primary Blue': 'bg-[#0648B3] text-white',
                'Primary Red': 'bg-[#DF2935] text-white',
                'Primary Green': 'bg-dark-blue  text-brown-accent',
                'Light Green': 'bg-[#6EE7B7] ',
                'Light Grey': 'bg-[#EBEBEB] ',
                white: 'bg-white text-p-blue border-p-blue',
            },
        },
        size: {
            control: { type: 'radio' },
            options: {
                small: 'w-32',
                medium: 'w-44',
                large: 'w-48',
            },
        },
        variant: {
            control: { type: 'select' },
            options: {
                small: 'rounded',
                medium: 'rounded-lg',
                large: 'rounded-xl',
                circle: 'rounded-full',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

/** as pors */
export const Base: Story = {
    args: {
        label: 'Kleine wondzorg',
        backgroundColor: '',
        size: 'w-44',
        variant: 'rounded',
    },
}

/** Dashobard button */
export const ButtonOption: Story = {
    args: {
        label: 'Kleine wondzorg',
        backgroundColor: 'bg-white text-dark-blue border-dark-blue',
        size: 'w-44',
        variant: 'rounded-full',
    },
}

/** Selected button for when button gets selected */
export const ButtonCheck: Story = {
    args: {
        primary: true,
        label: 'Kleine wondzorg',
        backgroundColor: 'bg-dark-blue  text-brown-accent border-dark-blue',
        size: 'w-44',
        variant: 'rounded-full',
    },
}

/** Selected button variation */

export const ButtonCheck2: Story = {
    args: {
        label: 'Text',
        primary: true,
        backgroundColor: 'bg-dark-blue text-brown-accent',
        size: 'w-44',
        variant: 'rounded-full',
        selected: false,
        icon: <CheckIcon />,
    },
}
/** Hover state of the Dashboard Hover */
export const ButtonHover: Story = {
    args: {
        label: 'Text',
        primary: true,
        backgroundColor:
            'bg-white text-dark-blue border-dark-blue border  hover:text-brown-accent hover:bg-dark-blue',
        size: 'w-44',
        variant: 'rounded-full',
        selected: true,
    },
}

export const Start: Story = {
    args: {
        primary: true,
        label: 'start',
        backgroundColor: 'bg-light-blue text-white border-light-blue',
        size: 'w-32',
        variant: 'rounded-lg',
    },
}

export const Next: Story = {
    args: {
        primary: true,
        label: 'volgende',
        backgroundColor: 'bg-[#0648B3] text-white border-p-blue',
        size: 'w-32',
        variant: 'rounded-lg',
    },
}

/** Exit the place by usign this button  */

export const ExitButton: Story = {
    args: {
        label: 'Exit',
        primary: false,
        backgroundColor: 'bg-[#DF2935] border--[#DF2935] text-white ',
        size: 'w-32',
        icon: ExitIcon,
        variant: 'rounded-full',
    },
}
export const ExitButtonWachtzaal: Story = {
    args: {
        label: 'Exit',
        primary: false,
        backgroundColor: 'bg-[#DF2935] border-[#DF2935] text-white ',
        size: 'w-32',
        variant: 'rounded-full',
    },
}
/** this displays the level of urgency */
export const TriageLevel: Story = {
    args: {
        label: 'T1',
        primary: false,
        backgroundColor:
            'bg-white text-dark-blue hover:bg-light-blue hover:text-brown-accent',
        size: 'w-14',
        variant: 'rounded',
    },
}
