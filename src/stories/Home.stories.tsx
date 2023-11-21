import { Meta, StoryObj } from '@storybook/react';

import Home from '../Pages/Home';

const meta: Meta<typeof Home> = {
    component: Home,
    tags: ['autodocs'],
    title: 'Pages/Ontslag/Home',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {
    args: {},
};
