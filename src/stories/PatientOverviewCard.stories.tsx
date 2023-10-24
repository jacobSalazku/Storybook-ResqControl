import { Meta, StoryObj } from '@storybook/react'
import { stringDate, stringTime } from './helpers/DateTime'
import PatientOverviewCard from './PatientOverviewCard'

const meta: Meta<typeof PatientOverviewCard> = {
    component: PatientOverviewCard,
    tags: ['autodocs'],
    title: 'Molecules/Patient Overview Card',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Start: Story = {
    args: {
        name: 'Jane Doe',
        time: stringTime,
        date: stringDate,
        language: 'ENG',
    },
}
