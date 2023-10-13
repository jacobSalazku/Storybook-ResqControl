import { Meta, StoryObj } from '@storybook/react'
import Pathology from './Pathology'

const meta: Meta<typeof Pathology> = {
    component: Pathology,
    tags: ['autodocs'],
    title: 'Pathology',
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
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}
