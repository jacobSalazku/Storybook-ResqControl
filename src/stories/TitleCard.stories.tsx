import { Meta, StoryObj } from '@storybook/react';
import Icon from '../Components/icon';
import TitleCard from '../Components/TitleCard';
import { StethoscopeIcon, EarLogo } from './helpers/ClientDataFunctions';
import IconButton from '../Components/IconButton';

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
        icon: (
            <Icon
                icon="icon-tabler-armchair"
                color="#497DAE"
                height="40"
                width="40"
                path={
                    <>
                        <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
                        <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
                        <path d="M6 19v2" />
                        <path d="M18 19v2" />
                    </>
                }
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
                    <Icon
                        icon="icon-tabler-send"
                        color="#FFFFFF"
                        height="20"
                        width="20"
                        path={
                            <>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                    x="10"
                                    y="10"
                                    width="30"
                                    height="20"
                                />
                                <path d="M14 10l-11 11" />
                                <path d="M3 21l6.5 -18a.55 .55 0 0 1 1 0l3.5 7l7 3.5a.55 .55 0 0 1 0 1l-18 6.5" />
                            </>
                        }
                    />
                }
                backgroundColor="bg-p-red border-p-red hover:bg-[#f7554f] shadow-md text-white"
                variant="rounded-sm"
            />
        ),
        rightButton: (
            <IconButton
                label="Naar Triage Wachtzaal"
                size="h-[40px] w-[px]"
                icon={
                    <Icon
                        icon="icon-tabler-report"
                        color="#263B54"
                        path={
                            <>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
                                <path d="M18 14v4h4" />
                                <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
                                <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M8 11h4" />
                                <path d="M8 15h3" />
                            </>
                        }
                    />
                }
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
