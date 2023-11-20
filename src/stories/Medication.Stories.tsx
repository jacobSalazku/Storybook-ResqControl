import { Meta, StoryObj } from '@storybook/react';

import Medication from '../Pages/Medication';

const meta: Meta<typeof Medication> = {
    component: Medication,
    tags: ['autodocs'],
    title: 'Pages/BasicTreatment/Medication',
    argTypes: {},
};
// eslint-disable-next-line
export default meta;

// Use the correct type for the Story
type Story = StoryObj<typeof meta>;

export const Location: Story = {
    args: {
        title: 'Locatie',
    },
};
