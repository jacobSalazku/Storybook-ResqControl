import { Meta, StoryObj } from '@storybook/react';

import Observation from '../Pages/Observation';

const meta: Meta<typeof Observation> = {
    component: Observation,
    tags: ['autodocs'],
    title: 'Pages/BasicTreatment/Observation',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
