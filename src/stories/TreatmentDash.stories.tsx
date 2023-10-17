import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { PrikIcon, SearchIcon } from './helpers/ClientDataFunctions'

import TreatmentDash from './TreatmentDash'

const meta: Meta<typeof TreatmentDash> = {
    component: TreatmentDash,
    tags: ['autodocs'],
    title: 'Treatment Dash',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const BasisTreament: Story = {
    args: {
        title: 'Buikpijn',
        topLeftLogo: PrikIcon,
        searchIcon: SearchIcon,
    },
}
