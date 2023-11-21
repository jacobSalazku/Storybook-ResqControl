import { Meta, StoryObj } from '@storybook/react';
import TreatmentMedication from '../pages/TreatmentMedication';

const meta: Meta<typeof TreatmentMedication> = {
    component: TreatmentMedication,
    tags: ['autodocs'],
    title: 'Pages/Treatment/Medication',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicTreatment: Story = {
    args: {},
};
