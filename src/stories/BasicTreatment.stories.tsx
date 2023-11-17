import { Meta, StoryObj } from '@storybook/react';

import BasicTreatment from '../pages/BasicTreatment';

const meta: Meta<typeof BasicTreatment> = {
    component: BasicTreatment,
    tags: ['autodocs'],
    title: 'Pages/BasicTreatment',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {},
};
