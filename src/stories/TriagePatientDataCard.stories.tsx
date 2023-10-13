import { Meta, StoryObj } from '@storybook/react'
import TriagePatientDataCard from './TriagePatientDataCard'

const meta: Meta<typeof TriagePatientDataCard> = {
    component: TriagePatientDataCard,
    tags: ['autodocs'],
    title: 'Triage Patient Data Card',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const BasisVerzorging: Story = {
    args: {
        name: 'John Doe',
        date: '24',
        time: '23:50',
        language: 'ENG',
    },
}
