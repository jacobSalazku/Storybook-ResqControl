import { Meta, StoryObj } from '@storybook/react'
import { stringDate, stringTime } from './helpers/DateTime'
import SmallDataCard from './SmallDataCard'

const meta: Meta<typeof SmallDataCard> = {
    component: SmallDataCard,
    tags: ['autodocs'],
    title: 'Small Patient Data  Card',
    argTypes: {},
}
export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        name: 'John Doe',
        urgency: 'base',
        time: stringTime,
        date: stringDate,
    },
}
export const Immediate: Story = {
    args: {
        name: 'John Doe',
        urgency: 'T3',
        time: stringTime,
        language: 'NL',
        date: stringDate,
    },
}

export const Urgent: Story = {
    args: {
        name: 'John Doe',
        urgency: 'T2',
        time: stringTime,
        language: 'BE',
        date: stringDate,
    },
}
export const Standerd: Story = {
    args: {
        name: 'John Doe',
        urgency: 'T1',
        time: stringTime,
        language: 'BE',
        date: stringDate,
    },
}
