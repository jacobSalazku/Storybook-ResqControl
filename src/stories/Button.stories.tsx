import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

import { ExitIcon } from './helpers/ClientDataFunctions'

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
                'Primary Red': 'bg-[#B94D4D] text-white',
                'Primary Green': 'bg-dark-green  text-brown-accent',
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

/** this is our button it comes wieh 2 variants
 * you can add label and backgroundColor
 * 3 different buttons sizes
 *  multiple border-sizes
 */

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
        backgroundColor: 'bg-white text-dark-green border-dark-green',
        size: 'w-44',
        variant: 'rounded-full',
    },
}

/** Selected button for when button gets selected */
export const ButtonCheck: Story = {
    args: {
        primary: true,
        label: 'Kleine wondzorg',
        backgroundColor: 'bg-dark-green  text-brown-accent border-dark-green',
        size: 'w-44',
        variant: 'rounded-full',
    },
}

/** Selected button variation */
export const ButtonCheck2: Story = {
    args: {
        label: 'Text',
        primary: true,
        backgroundColor: 'bg-white text-dark-green border-dark-green  hover',
        size: 'w-44',
        variant: 'rounded-full',
        selected: true,
    },
}
/** Hover */
export const ButtonHover: Story = {
    args: {
        label: 'Text',
        primary: true,
        backgroundColor:
            'bg-white text-dark-green border-dark-green border  hover:text-brown-accent hover:bg-dark-green',
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

export const Volgende: Story = {
    args: {
        primary: true,
        label: 'volgende',
        backgroundColor: 'bg-[#0648B3] text-white border-p-blue',
        size: 'w-32',
        variant: 'rounded-lg',
    },
}

/** Exit the place by usign this button  */

export const ExitButton2: Story = {
    args: {
        label: 'Exit',
        primary: false,
        backgroundColor: 'bg-[#B94D4D] border--[#B94D4D] text-white ',
        size: 'w-32',
        icon: ExitIcon,
        variant: 'rounded-full',
    },
}
export const Wachtzaal: Story = {
    args: {
        label: 'Exit',
        primary: false,
        backgroundColor: 'bg-[#B94D4D] border-[#B94D4D] text-white ',
        size: 'w-32',
        variant: 'rounded-full',
    },
}
export const TriageLevel: Story = {
    args: {
        label: 'T1',
        primary: false,
        backgroundColor:
            'bg-white text-dark-green hover:bg-dark-green hover:text-brown-accent',
        size: 'w-14',
        variant: 'rounded',
    },
}
