import { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './iconButton'
import ExitIcon from './helpers/icons/ExitICon'
import {
    AllergiesIcon,
    iconDelete,
    NextIcon,
} from './helpers/ClientDataFunctions'

const meta: Meta<typeof IconButton> = {
    component: IconButton,
    tags: ['autodocs'],
    title: 'Icon Buttons',
    argTypes: {
        backgroundColor: {
            control: { type: 'select' },
            options: {
                'Dark Blue': 'bg-[#1E293B] ',
                'Light Blue': 'bg-[##6CDCC] ',
                'Primary Blue': 'bg-[#0648B3]',
                'Primary Red': 'bg-[#B94D4D] ',
                'Primary Green': 'bg-[#34D399] ',
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
                xl: 'rounded-3xl',
                circle: 'rounded-full',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Cancel: Story = {
    args: {
        backgroundColor: 'bg-[#B94D4D]  border-[#B94D4D] ',
        size: 'w-32',
        icon: <ExitIcon />,
        variant: 'rounded-full',
    },
}
/** Button to stop the actions in Treatment */
export const Delete: Story = {
    args: {
        backgroundColor: 'bg-[#B94D4D] border-[#B94D4D]',
        size: 'w-32',
        icon: iconDelete,
        variant: 'rounded-full',
    },
}
/** Button to go to the next Treatment */
export const Next: Story = {
    args: {
        backgroundColor: 'bg-p-yellow border-p-yellow',
        size: 'w-32',
        icon: NextIcon,
        variant: 'rounded-3xl',
    },
}
export const Allergies: Story = {
    args: {
        backgroundColor: 'bg-brown-accent border-brown-accent',
        size: 'w-14',
        icon: AllergiesIcon,
        variant: 'rounded',
    },
}
