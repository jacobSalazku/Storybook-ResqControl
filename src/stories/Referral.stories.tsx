import { Meta, StoryObj } from '@storybook/react';
import Referral from '../Pages/Referral';

const meta: Meta<typeof Referral> = {
    component: Referral,
    tags: ['autodocs'],
    title: 'Pages/Ontslag/Referral',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
