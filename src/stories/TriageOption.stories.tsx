import { Meta, StoryObj } from '@storybook/react'
import TriageOption from '../Components/TriageOption'

const meta: Meta<typeof TriageOption> = {
    component: TriageOption,
    tags: ['autodocs'],
    title: 'Molecules/Triage Option',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}

export const TriageOne: Story = {
    args: {
        triageSelection: 'T1',
    },
}

export const TriageTwo: Story = {
    args: {
        triageSelection: 'T2',
    },
}

export const TriageThree: Story = {
    args: {
        triageSelection: 'T3',
    },
}
