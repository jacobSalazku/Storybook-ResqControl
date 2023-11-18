import { Meta, StoryObj } from '@storybook/react';
import Medication from '../Pages/Medication';

const meta: Meta<typeof Medication> = {
    component: Medication,
    tags: ['autodocs'],
    title: 'Pages/BasicTreatment/Medication',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Verzorgin: Story = {
    args: {},
};
