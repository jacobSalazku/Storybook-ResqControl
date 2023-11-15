import { Meta, StoryObj } from '@storybook/react';
import { PatientDataCard } from '../Components/PatientDataCard';
import { stringTime, stringDate } from './helpers/DateTime';

const meta: Meta<typeof PatientDataCard> = {
    component: PatientDataCard,
    tags: ['autodocs'],
    title: 'Molecules/Patient Data Card',
    argTypes: {
        language: {
            control: { type: 'select' },
            options: ['NL', 'FR', 'ENG', 'DE'],
        },
        date: { control: { type: 'date' } },
        urgency: {
            control: { type: 'select' },
            options: {
                Standard: 'T1',
                Urgent: 'T2',
                Immediate: 'T3',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        name: 'John Doe',
        urgency: 'base',
        time: stringTime,
        date: stringDate,
    },
};

export const Immediate: Story = {
    args: {
        name: 'John Doe',
        urgency: 'T3',
        time: stringTime,
        language: 'NL',
        date: stringDate,
    },
};

export const Urgent: Story = {
    args: {
        name: 'John Doe',
        urgency: 'T2',
        time: stringTime,
        language: 'BE',
        date: stringDate,
    },
};
export const Standerd: Story = {
    args: {
        name: 'John Doe',
        urgency: 'T1',
        time: stringTime,
        language: 'BE',
        date: stringDate,
    },
};
