import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import TreatmentMenu from '../Components/TreatmentMenu';
import TreatmentDash from '../Components/TreatmentDash';
import { menuItems } from './Medication';
import {
    IconDeviceFloppy,
    IconVaccine,
    IconStethoscope,
} from '@tabler/icons-react';
import TitleCardTreatmentMenu from '../Components/TitleCardTreatmentMenu';

const Treatment = () => {
    return (
        <div className="flex h-auto max-w-[960px] flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center bg-white ">
                <Header />
                <TitleCardTreatmentMenu
                    title="Basis Verzorging"
                    icon={<IconStethoscope color="#497DAE" />}
                    rightButton={
                        <IconButton
                            label="Wijzigingen opslaan"
                            backgroundColor=" border-[#497DAE] bg-[#497DAE] text-white shadow-lg "
                            size="h-[40px] w-[193px]"
                            icon={<IconDeviceFloppy />}
                            variant="rounded-sm"
                        />
                    }
                    menu={
                        <TreatmentMenu menuItems={menuItems} activeTitle={0} />
                    }
                />
            </div>
            {/** active title prop only for storybook  */}

            <div className="pt-5">
                <TreatmentDash
                    title="Buikpijn"
                    topLeftLogo={<IconVaccine color="#497DAE" />}
                />
                <TreatmentDash
                    title="Buikpijn"
                    topLeftLogo={<IconVaccine color="#497DAE" />}
                />
            </div>
        </div>
    );
};

export default Treatment;
