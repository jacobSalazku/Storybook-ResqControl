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

export const Verzorging: Story = {
    args: {
        menu: 'Verzorging',
    },
};
export const Medicatie: Story = {
    args: {
        menu: 'Medicatie',
    },
};
export const Materiaal: Story = {
    args: {
        menu: 'Materiaal',
    },
};

export const Opmerkingen: Story = {
    args: {
        menu: 'Opmerkingen',
    },
};
