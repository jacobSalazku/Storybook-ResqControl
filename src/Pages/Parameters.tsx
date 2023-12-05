import {
    IconDeviceFloppy,
    IconStethoscope,
    IconVaccine,
} from '@tabler/icons-react';
import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import ParametersDash from '../Components/ParametersDash';
import { proceedsArr } from '../Components/patientData';
import TitleCard from '../Components/TitleCard';
import TreatmentMenu from '../Components/TreatmentMenu';
import { stringTime } from '../stories/helpers/DateTime';

const menuItems = [
    'Parameters',
    'Handelingen',
    'Medicatie',
    'Sample',
    'Opmerkingen',
];

const Parameters = () => {
    return (
        <div className="flex h-auto max-w-[960px] flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center bg-white ">
                <Header />

                <TitleCard
                    title="Behandeling"
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
            <TreatmentMenu menuItems={menuItems} activeTitle={0} />
            <ParametersDash
                title={stringTime}
                topLeftLogo={<IconVaccine color="#497DAE" />}
                Itemsarr={proceedsArr}
            />
        </div>
    );
};

export default Parameters;
