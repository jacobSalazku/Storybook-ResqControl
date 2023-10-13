import { Meta, StoryObj } from '@storybook/react'
import TriageOption from './TriageOption'

const meta: Meta<typeof TriageOption> = {
    component: TriageOption,
    tags: ['autodocs'],
    title: 'Triage Option',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}

export const TriageOnee: Story = {
    args: {},
}

export const TriageTwo: Story = {
    args: {},
}

export const TriageThree: Story = {
    args: {},
}
