import { Meta, StoryObj } from '@storybook/react';
import ParametersDash from '../Components/ParametersDash';

const meta: Meta<typeof ParametersDash> = {
    component: ParametersDash,
    tags: ['autodocs'],
    title: 'Molecukes/ParametersDash',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
