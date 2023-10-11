import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

import ExitIcon from './helpers/icons/ExitICon'

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    title: 'Button',
    argTypes: {
        backgroundColor: {
            control: { type: 'select' },
            options: {
                'Dark Blue': 'bg-[#1E293B] text-white',
                'Light Blue': 'bg-[#60A5FA] text-white',
                'Primary Blue': 'bg-[#0648B3] text-white border-p-blue',
                'Primary Red': 'bg-[#EF4444] text-white',
                'Primary Purple': 'bg-[#C4B5FD] text-white',
                'Primary Green': 'bg-[#34D399] text-white',
                'Light Green': 'bg-[#6EE7B7] text-white',
                'Light Grey': 'bg-[#EBEBEB] text-white',
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
        backgroundColor: 'bg-white text-p-blue border-p-blue',
        size: 'w-44',
        variant: 'rounded',
    },
}

/** Selected button for when button gets selected */
export const ButtonCheck: Story = {
    args: {
        primary: true,
        label: 'Kleine wondzorg',
        backgroundColor: 'bg-[#6EE7B7]  text-p-blue border-p-blue',
        size: 'w-44',
        variant: 'rounded-lg',
    },
}

/** Selected button variation */
export const ButtonCheck2: Story = {
    args: {
        label: 'Kleine wondzorg',
        primary: true,
        backgroundColor:
            'border-p-blue text-p-blue hover:bg-p-blue  hover:text-white ',
        size: 'w-44',
        variant: 'rounded',
        selected: true,
    },
}

export const Primary: Story = {
    args: {
        primary: true,
        label: 'volgende',
        backgroundColor: 'bg-[#0648B3] text-white border-p-blue',
        size: 'w-44',
        variant: 'rounded-lg',
    },
}

/** Exit the place by usign this button  */
export const Cancel: Story = {
    args: {
        primary: false,
        backgroundColor: 'bg-[#EF4444] text-white',
        size: 'w-32',
        icon: <ExitIcon />,
    },
}

export const ExitButton2: Story = {
    args: {
        label: 'Exit',
        primary: false,
        backgroundColor: 'bg-[#EF4444] text-white',
        size: 'w-32',
        icon: <ExitIcon />,
    },
}
export const Wachtzaal: Story = {
    args: {
        label: 'Exit',
        primary: false,
        backgroundColor:
            'bg-[#EF4444] text-white hover:bg-white hover:text-p-blue ',
        size: 'w-48',
        variant: 'circle',
    },
}
