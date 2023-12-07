import { Meta, StoryObj } from '@storybook/react';
import TitleCardTreatmentMenu from '../Components/TitleCardTreatmentMenu';

import { IconArrowBarLeft, IconReport } from '@tabler/icons-react';
import TitleCardButton from '../Components/TitleCardButton';
import TreatmentMenu from '../Components/TreatmentMenu';
import { menuItems } from '../Pages/Festival';

const meta: Meta<typeof TitleCardTreatmentMenu> = {
    component: TitleCardTreatmentMenu,
    tags: ['autodocs'],
    title: 'Molecules/Title Card Treatment Menu',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Treatment: Story = {
    args: {
        title: 'Triage',
        leftButton: (
            <TitleCardButton
                label="Behandeling"
                size="h-[40px] w-[171px]"
                icon={
                    <IconArrowBarLeft color="#FFFFFF" height="20" width="20" />
                }
                backgroundColor="bg-p-red border-p-red hover:bg-[#f7554f] shadow-md text-white"
                variant="rounded-sm"
            />
        ),
        rightButton: (
            <TitleCardButton
                label="Behandeling afronden "
                size="h-[40px] w-[px]"
                icon={<IconReport color="#263B54" />}
                backgroundColor=" border-background-color hover:border-[#497DAE] hover:bg-[#497DAE] hover:text-white shadow-md "
                variant="rounded-sm"
            />
        ),
        menu: <TreatmentMenu menuItems={menuItems} activeTitle={0} />,
    },
};
