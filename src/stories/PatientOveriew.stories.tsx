import { Meta, StoryObj } from '@storybook/react'

import { PatientOverview } from './PatientOverview'

const meta: Meta<typeof PatientOverview> = {
    component: PatientOverview,
    tags: ['autodocs'],
    title: 'Patient Overview',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}
export const Completed: Story = {
    args: {
        isCompleted: true,
    },
}
