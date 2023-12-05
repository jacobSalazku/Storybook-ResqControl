import { Meta, StoryObj } from '@storybook/react';
import TitleCard from '../Components/TitleCard';
import IconButton from '../Components/IconButton';
import { IconArrowBarLeft, IconPlus, IconReport } from '@tabler/icons-react';
import IconButtonLogoRight from '../Components/IconButtonLogoRight';
import Searchbar from '../Components/Searchbar';

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
        title: 'Overzicht patiënten',
        leftButton: (
            <IconButtonLogoRight
                label="Patient toevoegen"
                size="h-[40px] w-[px]"
                icon={<IconPlus color="#497DAE" />}
                backgroundColor="border-2 border-[#497DAE] text-[#497DAE] shadow-md "
                variant="rounded-md"
            />
        ),
        rightButton: (
            <Searchbar
                borderColor="[#497DAE]"
                borderRadius="rounded-full"
                placeholder="search"
                iconColor="black"
                width={140}
                height={30}
            />
        ),
    },
};

export const Triage: Story = {
    args: {
        title: 'Triage',
        leftButton: (
            <IconButton
                label="Triage Annuleren"
                size="h-[40px] w-[171px]"
                icon={
                    <IconArrowBarLeft color="#FFFFFF" height="20" width="20" />
                }
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
    },
};
export const BasicTreatment: Story = {
    args: {
        title: 'Basis verzorging',
    },
};
export const Treatment: Story = {
    args: {
        title: 'Behandeling',
    },
};
