import { Meta, StoryObj } from '@storybook/react'

import InputSelect from './InputSelect'

const meta: Meta<typeof InputSelect> = {
    component: InputSelect,
    tags: ['autodocs'],
    title: 'InputSelect',
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>
