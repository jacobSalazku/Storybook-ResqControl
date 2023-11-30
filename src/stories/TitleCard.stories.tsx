import { Meta, StoryObj } from '@storybook/react';
import TitleCard from '../Components/TitleCard';
import { StethoscopeIcon, EarLogo } from './helpers/ClientDataFunctions';
import IconButton from '../Components/IconButton';
import { IconArmchair, IconReport, IconSend } from '@tabler/icons-react';

const meta: Meta<typeof TitleCard> = {
    component: TitleCard,
    tags: ['autodocs'],
    title: 'Fundaments/Title Card',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: 'Title',
    },
};

export const PatientOverview: Story = {
    args: {
        title: 'Wachtzaal inschrijvingen',
        icon: <IconArmchair color="#497DAE" height="40" width="40" />,
    },
};

export const Triage: Story = {
    args: {
        title: 'Triage',
        leftButton: (
            <IconButton
                label="Triage Annuleren"
                size="h-[40px] w-[171px]"
                icon={<IconSend color="#FFFFFF" height="20" width="20" />}
                backgroundColor="bg-p-red border-p-red hover:bg-[#f7554f] shadow-md text-white"
                variant="rounded-sm"
            />
        ),
        rightButton: (
            <IconButton
                label="Naar Triage Wachtzaal"
                size="h-[40px] w-[px]"
                icon={<IconReport color="#263B54" />}
                backgroundColor=" border-background-color hover:border-[#497DAE] hover:bg-[#497DAE] hover:text-white shadow-md "
                variant="rounded-sm"
            />
        ),
        icon: EarLogo,
    },
};
export const BasicTreatment: Story = {
    args: {
        title: 'Basis verzorging',

        icon: StethoscopeIcon,
    },
};
export const Treatment: Story = {
    args: {
        title: 'Behandeling',

        icon: StethoscopeIcon,
    },
};
