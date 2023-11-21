import {
    IconDeviceFloppy,
    IconSearch,
    IconStethoscope,
    IconVaccine,
} from '@tabler/icons-react';
import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import { proceedsArr } from '../Components/patientData';
import TitleCard from '../Components/TitleCard';
import TreatmentMenu from '../Components/TreatmentMenu';
import { menuItems } from './Medication';
import { useState } from 'react';
import ProceedsDash from '../Components/ProceedsDash';
import { stringTime } from '../stories/helpers/DateTime';

const Proceedings = () => {
    const [isSearchInputVisible, setSearchInputVisible] = useState(false);

    const toggleSearchInput = () => {
        setSearchInputVisible(!isSearchInputVisible);
    };
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <Header />
            <div className="w-[58rem] flex flex-col justify-center items-center before: bg-white">
                <TitleCard
                    title="Basis Verzorging"
                    icon={<IconStethoscope color="#497DAE" />}
                    rightButton={
                        <IconButton
                            label="Wijzigingen opslaan"
                            backgroundColor=" border-[#497DAE] bg-[#497DAE] text-white shadow-lg"
                            size="h-[40px] w-[193px]"
                            icon={<IconDeviceFloppy />}
                            variant="rounded-sm"
                        />
                    }
                />
            </div>
            {/** active title prop only for storybook  */}
            <TreatmentMenu menuItems={menuItems} activeTitle={1} />
            <div className="pt-5">
                <ProceedsDash
                    title={stringTime}
                    topLeftLogo={<IconVaccine color="#497DAE" />}
                    Itemsarr={proceedsArr}
                    searchIcon={
                        <IconButton
                            icon={<IconSearch color="#497DAE" />}
                            variant="rounded-full"
                            size="w-[130px] h-[40px]"
                            backgroundColor="border-light-blue"
                            onClick={toggleSearchInput}
                        />
                    }
                />
            </div>
        </div>
    );
};

export default Proceedings;