import { Meta, StoryObj } from '@storybook/react'
import WaitingRoom from './WaitingRoom'

const meta: Meta<typeof WaitingRoom> = {
    component: WaitingRoom,
    tags: ['autodocs'],
    title: 'Waiting Room',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const BasisVerzorging: Story = {
    args: {},
}
