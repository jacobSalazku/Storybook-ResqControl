import { Meta, StoryObj } from '@storybook/react'
import Pathology from './Pathology'

const meta: Meta<typeof Pathology> = {
    component: Pathology,
    tags: ['autodocs'],
    title: 'Pathology',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}