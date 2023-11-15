import { Meta, StoryObj } from '@storybook/react';

import Header from '../Components/Header';

const meta: Meta<typeof Header> = {
    component: Header,
    tags: ['autodocs'],
    title: 'Molecules/Header',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {
    args: {},
};
