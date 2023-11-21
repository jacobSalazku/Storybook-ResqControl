import { Meta, StoryObj } from '@storybook/react';
import Sample from '../Pages/Sample';

const meta: Meta<typeof Sample> = {
    component: Sample,
    tags: ['autodocs'],
    title: 'Pages/Treatment/Sample',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Start: Story = {
    args: {},
};
