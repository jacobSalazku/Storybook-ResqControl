import { Meta, StoryObj } from '@storybook/react';
import Treatment from '../Pages/Treatment';

const meta: Meta<typeof Treatment> = {
    component: Treatment,
    tags: ['autodocs'],
    title: 'Pages/BasicTreatment/Verzorging',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {},
};
