import { Meta, StoryObj } from '@storybook/react';
import TreatmentMenu from '../Components/TreatmentMenu';

const meta: Meta<typeof TreatmentMenu> = {
    component: TreatmentMenu,
    tags: ['autodocs'],
    title: 'Organisme/TreatmentMenu',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicTreatment: Story = {
    args: {
        menuItems: ['Verzorging', 'Medicatie', 'Materiaal', 'Opmerkingen'],
    },
};

export const Treatement: Story = {
    args: {
        menuItems: [
            'Parameters',
            'Handelingen',
            'Medicatie',
            'Sample',
            'Opmerkingen',
        ],
    },
};
