import { Meta, StoryObj } from '@storybook/react';
import Reject from '../Pages/Reject';

const meta: Meta<typeof Reject> = {
    component: Reject,
    tags: ['autodocs'],
    title: 'Pages/Treatment/Reject',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Start: Story = {
    args: {},
};
