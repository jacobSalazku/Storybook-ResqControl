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
    args: {
        complete: false,
    },
}
export const Completed: Story = {
    args: {
        complete: true,
    },
}
