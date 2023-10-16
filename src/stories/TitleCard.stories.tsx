import { Meta, StoryObj } from '@storybook/react'

import TitleCard from './TitleCard'
import {
    EyeLogo,
    NextIcon,
    SofaIcon,
    SendIcon,
    StethoscopeIcon,
} from './helpers/ClientDataFunctions'
import { IconButton } from './iconButton'

const meta: Meta<typeof TitleCard> = {
    component: TitleCard,
    tags: ['autodocs'],
    title: 'Titlet Card',
    argTypes: {},
}
export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        title: 'Title',
    },
}

export const PatientOverview: Story = {
    args: {
        title: 'Patient overzicht',
        button: (
            <IconButton
                icon={NextIcon}
                backgroundColor="bg-brown-accent border-brown-accent"
                variant="rounded-3xl"
                size="w-32"
            />
        ),
        rightLogo: EyeLogo,
    },
}
export const Triage: Story = {
    args: {
        title: 'Triage',
        button: (
            <IconButton
                icon={SofaIcon}
                backgroundColor="bg-dark-green"
                variant="rounded-3xl"
                size="w-32"
            />
        ),
        rightLogo: EyeLogo,
    },
}
export const BasicTreatment: Story = {
    args: {
        title: 'Basis verzorging',
        button: (
            <IconButton
                icon={SendIcon}
                backgroundColor="bg-dark-green"
                variant="rounded-3xl"
                size="w-32"
            />
        ),
        rightLogo: EyeLogo,
    },
}
export const Treatment: Story = {
    args: {
        title: 'Behandeling',
        button: (
            <IconButton
                icon={SendIcon}
                backgroundColor="bg-dark-green"
                variant="rounded-3xl"
                size="w-32"
            />
        ),
        rightLogo: StethoscopeIcon,
    },
}
