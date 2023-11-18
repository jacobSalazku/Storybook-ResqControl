import { Meta, StoryObj } from '@storybook/react';
import { IconLogout } from '@tabler/icons-react';
import IconButton from '../Components/IconButton';
import { iconDelete, PlusIcon } from './helpers/ClientDataFunctions';

const meta: Meta<typeof IconButton> = {
    component: IconButton,
    tags: ['autodocs'],
    title: 'Atoms/Buttons/Icon Buttons',
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
                xl: 'rounded-3xl',
                circle: 'rounded-full',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Logout: Story = {
    args: {
        backgroundColor: 'bg-p-red text-white border-p-red',
        size: 'w-[125px] h-[35px]',
        icon: <IconLogout color="#FFFFFF" />,
        variant: 'rounded',
    },
};
/** Button to stop the actions in Treatment */
export const Delete: Story = {
    args: {
        backgroundColor: 'bg-[#DF2935] border-[#DF2935]',
        size: 'w-32',
        icon: iconDelete,
        variant: 'rounded-full',
    },
};
/** Button to go to the next Treatment */

export const Plus: Story = {
    args: {
        backgroundColor: 'bg-light-blue border-light-blue',
        size: 'w-12',
        icon: PlusIcon,
        variant: 'rounded-full',
        hover: 'hover:bg-[#082646] hover:border-dark-blue',
    },
};
