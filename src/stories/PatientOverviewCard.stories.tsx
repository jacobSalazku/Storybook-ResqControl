import { Meta, StoryObj } from '@storybook/react';
import { stringTime } from './helpers/DateTime';
import PatientOverviewCard from '../Components/PatientOverviewCard';

const meta: Meta<typeof PatientOverviewCard> = {
    component: PatientOverviewCard,
    tags: ['autodocs'],
    title: 'Molecules/Patient Overview Card',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Start: Story = {
    args: {
        name: 'Jane Doe',
        time: stringTime,
        gender: 'Man',
        language: 'ENG',
        urgency: 'T2',
        nationality: 'België',
        dateOfBirth: '02/10/1983',
        allergies: false,
    },
};
