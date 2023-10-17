import { Meta, StoryObj } from '@storybook/react'
import TreatmentMenu from './TreatmentMenu'

const meta: Meta<typeof TreatmentMenu> = {
    component: TreatmentMenu,
    tags: ['autodocs'],
    title: 'TreatmentMenu',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const BasisVerzorging: Story = {
    args: {},
}
