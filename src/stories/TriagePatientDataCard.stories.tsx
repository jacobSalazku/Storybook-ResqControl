import { Meta, StoryObj } from '@storybook/react';
import TriagePatientDataCard from '../Components/TriagePatientDataCard';

const meta: Meta<typeof TriagePatientDataCard> = {
    component: TriagePatientDataCard,
    tags: ['autodocs'],
    title: 'Molecules/Triage Patient Data Card',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasisVerzorging: Story = {
    args: {
        name: 'John Doe',
        time: '23:50',
        language: 'ENG',
        gender: 'Man',
        nationality: 'België',
        dateOfBirth: '19/03/1998',
        allergies: true,
    },
};
