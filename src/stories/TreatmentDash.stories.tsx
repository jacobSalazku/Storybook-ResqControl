import { Meta, StoryObj } from '@storybook/react';
import TreatmentDash from '../Components/TreatmentDash';
import { IconVaccine } from '@tabler/icons-react';

const meta: Meta<typeof TreatmentDash> = {
    component: TreatmentDash,
    tags: ['autodocs'],
    title: 'Molecules/Treatment Dash',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasisTreament: Story = {
    args: {
        title: 'Buikpijn',
        topLeftLogo: <IconVaccine color="#3A638A" />,
    },
};
