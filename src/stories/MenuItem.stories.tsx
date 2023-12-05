import { Meta, StoryObj } from '@storybook/react';
import MenuItem from '../Components/MenuItem';
import { IconCircleDashed, IconClipboardList } from '@tabler/icons-react';

const meta: Meta<typeof MenuItem> = {
    component: MenuItem,
    tags: ['autodocs'],
    title: 'Fundaments/Waiting Room Menu Item',
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
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Normal state of menu Item */
export const NormalState: Story = {
    args: {
        title: 'WachtZaal Triage',
        icon: <IconClipboardList color="#4A4A4A" />,
        backgroundColor: 'bg-white text-p-text-color border',
    },
};

/** Menu Item Selected State */
export const SelectedState: Story = {
    args: {
        title: 'in behandeling',
        backgroundColor: 'bg-dark-blue text-white transition',
        icon: <IconCircleDashed color="#ffffff" />,
    },
};
