import { Meta, StoryObj } from '@storybook/react'

import InputSelect from './InputSelect'

const meta: Meta<typeof InputSelect> = {
    component: InputSelect,
    tags: ['autodocs'],
    title: 'Input Select',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Location: Story = {
    args: {
        title: 'Locatie',
    },
}

export const Side: Story = {
    args: {
        title: 'Locatie',
    },
}
