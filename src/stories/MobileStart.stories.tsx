import { Meta, StoryObj } from '@storybook/react';

import Start from '../MobilePages/Start';

const meta: Meta<typeof Start> = {
    component: Start,
    tags: ['autodocs'],
    title: 'MobilePages/Start',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Location: Story = {};
