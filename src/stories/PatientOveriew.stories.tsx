import { Meta, StoryObj } from '@storybook/react'
import { ExitIcon, PrintIcon, SendIcon } from './helpers/ClientDataFunctions'
import { IconButton } from './iconButton'

import { PatientOverview } from './PatientOverview'

const meta: Meta<typeof PatientOverview> = {
    component: PatientOverview,
    tags: ['autodocs'],
    title: 'Patient Overview',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Start: Story = {
    args: {
        leftButton: (
            <IconButton
                size="w-32"
                backgroundColor="bg-[#B94D4D]"
                variant="rounded-full"
                icon={ExitIcon}
            />
        ),
    },
}
export const Completed: Story = {
    args: {
        leftButton: (
            <IconButton
                size="w-32"
                backgroundColor="bg-[#B94D4D]"
                variant="rounded-full"
                icon={ExitIcon}
            />
        ),
        middleButton: (
            <IconButton
                icon={PrintIcon}
                size="w-32"
                backgroundColor="bg-dark-green"
                variant="rounded-full"
            />
        ),
        rightButton: (
            <IconButton
                icon={SendIcon}
                size="w-32"
                backgroundColor="bg-dark-green"
                variant="rounded-full"
            />
        ),
    },
}
