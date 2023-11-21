import { Meta, StoryObj } from '@storybook/react';
import Parameters from '../Pages/Parameters';

const meta: Meta<typeof Parameters> = {
    component: Parameters,
    tags: ['autodocs'],
    title: 'Pages/Treatment/Parameters',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
