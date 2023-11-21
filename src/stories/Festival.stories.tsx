import { Meta, StoryObj } from '@storybook/react';

import Festival from '../Pages/Festival';

const meta: Meta<typeof Festival> = {
    component: Festival,
    tags: ['autodocs'],
    title: 'Pages/Ontslag/Festival',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {
    args: {},
};
