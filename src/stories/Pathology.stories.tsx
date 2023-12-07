import { Meta, StoryObj } from '@storybook/react';

import PathologyItem from '../Components/PathologyItem';

const meta: Meta<typeof PathologyItem> = {
    component: PathologyItem,
    tags: ['autodocs'],
    title: 'Molecules/PathologyItem',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
