import { Meta, StoryObj } from '@storybook/react'

import TreatmentCard from '../Components/TreatmentCard'

const meta: Meta<typeof TreatmentCard> = {
    component: TreatmentCard,
    tags: ['autodocs'],
    title: 'Fundaments/Treatment Card',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const BasisTreament: Story = {
    args: {
        description: 'Basis verzorging',
        isCompleted: false,
    },
}
export const Treatment: Story = {
    args: {
        description: 'Behandeling',
        isCompleted: false,
    },
}
export const Ontslag: Story = {
    args: {
        description: 'Ontslag',
        isCompleted: false,
    },
}
