import { Meta, StoryObj } from '@storybook/react';

import Ambulance from '../Pages/Ambulance';

const meta: Meta<typeof Ambulance> = {
    component: Ambulance,
    tags: ['autodocs'],
    title: 'Pages/Ontslag/Ambulance',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {
    args: {},
};
