import { Meta, StoryObj } from '@storybook/react'

import Ontslag from './Ontslag'

const meta: Meta<typeof Ontslag> = {
    component: Ontslag,
    tags: ['autodocs'],
    title: 'Page/Ontslag',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {},
}
