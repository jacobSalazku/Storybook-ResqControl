import { Meta, StoryObj } from '@storybook/react'
import UrgencyDashboard from './UrgencyDashboard'

const meta: Meta<typeof UrgencyDashboard> = {
    component: UrgencyDashboard,
    tags: ['autodocs'],
    title: 'Urgency Dashboard',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const BasisVerzorging: Story = {
    args: {},
}
