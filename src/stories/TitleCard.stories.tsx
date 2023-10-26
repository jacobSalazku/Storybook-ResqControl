import { Meta, StoryObj } from '@storybook/react'

import TitleCard from '../Components/TitleCard'
import {
    EyeLogo,
    NextIcon,
    SofaIcon,
    SendIcon,
    StethoscopeIcon,
    EarLogo,
    Sofa,
    SaveIcon,
} from './helpers/ClientDataFunctions'
import { IconButton } from '../Components/IconButton'

const meta: Meta<typeof TitleCard> = {
    component: TitleCard,
    tags: ['autodocs'],
    title: 'Fundaments/Title Card',
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
                backgroundColor="bg-p-yellow border-white"
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
                icon={Sofa}
                backgroundColor="bg-light-blue border-white"
                variant="rounded-3xl"
                size="w-32"
            />
        ),
        rightLogo: EarLogo,
    },
}
export const BasicTreatment: Story = {
    args: {
        title: 'Basis verzorging',
        button: (
            <IconButton
                icon={SaveIcon}
                backgroundColor="bg-light-blue"
                variant="rounded-3xl"
                size="w-32"
            />
        ),
        rightLogo: StethoscopeIcon,
    },
}
export const Treatment: Story = {
    args: {
        title: 'Behandeling',
        button: (
            <IconButton
                icon={SaveIcon}
                backgroundColor="bg-light-blue"
                variant="rounded-3xl"
                size="w-32"
            />
        ),
        rightLogo: StethoscopeIcon,
    },
}
