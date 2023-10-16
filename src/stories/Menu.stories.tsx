import { Meta, StoryObj } from '@storybook/react'

import Menu from './Menu'

const meta: Meta<typeof Menu> = {
    component: Menu,
    tags: ['autodocs'],
    title: 'Menu',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}
