import {
    IconDeviceFloppy,
    IconNote,
    IconStethoscope,
} from '@tabler/icons-react';
import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import ObservationDash from '../Components/ObservationDash';
import TitleCard from '../Components/TitleCard';
import TreatmentMenu from '../Components/TreatmentMenu';

const Observation = () => {
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
                            backgroundColor=" border-[#497DAE] bg-[#497DAE] text-white shadow-lg "
                            size="h-[40px] w-[193px]"
                            icon={<IconDeviceFloppy />}
                            variant="rounded-sm"
                        />
                    }
                />
            </div>
            <TreatmentMenu menu="Opmerkingen" />
            <ObservationDash
                topLeftLogo={<IconNote color="#294564" stroke={1.5} />}
                title="Buikepijn"
            />
        </div>
    );
};

export default Observation;
