import { Meta, StoryObj } from '@storybook/react'

import Menu from '../Components/Menu'

const meta: Meta<typeof Menu> = {
    component: Menu,
    tags: ['autodocs'],
    title: 'Organisme/Menu',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}
