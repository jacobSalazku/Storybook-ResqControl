import { Meta, StoryObj } from '@storybook/react';
import Registration from '../Mobilepages/Registration';

const meta: Meta<typeof Registration> = {
    component: Registration,
    tags: ['autodocs'],
    title: 'Mobilepages/Registration',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
