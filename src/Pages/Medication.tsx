import {
    IconDeviceFloppy,
    IconStethoscope,
    IconVaccine,
} from '@tabler/icons-react';
import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import TitleCard from '../Components/TitleCard';
import LargeTreatmentDash from '../Components/LargeTreatmentDash';
import TreatmentMenu from '../Components/TreatmentMenu';

export const menuItems = [
    'Verzorging',
    'Medicatie',
    'Materiaal',
    'Opmerkingen',
];
const Medication = () => {
    return (
        <div className="flex h-auto max-w-[960px] flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center bg-white ">
                <Header />
                <TitleCard
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
                />
            </div>
            <TreatmentMenu menuItems={menuItems} activeTitle={1} />
            <LargeTreatmentDash
                title="Buikpijn"
                topLeftLogo={<IconVaccine color="#497DAE" />}
            />
        </div>
    );
};

export default Medication;
