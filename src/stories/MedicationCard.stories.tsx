import { Meta, StoryObj } from '@storybook/react'

import MedicationDash from './MedicationCard'

const meta: Meta<typeof MedicationDash> = {
    component: MedicationDash,
    tags: ['autodocs'],
    title: 'Molecules/Medication Card',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const BasisTreament: Story = {
    args: {},
}
