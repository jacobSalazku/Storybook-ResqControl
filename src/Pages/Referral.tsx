import { IconDeviceFloppy, IconDoorExit, IconNote } from '@tabler/icons-react';
import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import InputTextArea from '../Components/InputTextArea';
import TitleCard from '../Components/TitleCard';
import TreatmentMenu from '../Components/TreatmentMenu';
import { menuItems } from './Festival';
const Referral = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <Header />
            <div className="flex flex-col justify-center items-center before: bg-white">
                <TitleCard
                    title="Ontslag"
                    icon={<IconDoorExit color="#497DAE" />}
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
            <TreatmentMenu menuItems={menuItems} activeTitle={2} />
            <div className="w-[58rem] h-auto border-8 border-white rounded-md mb-2 flex flex-row justify-center mt-4">
                <div className="w-full flex flex-row flex-wrap justify-between items-center px-6 gap-x-1 gap-y-4">
                    <InputTextArea
                        title="Opmerkingen"
                        icon={<IconNote color="#497DAE" size={40} stroke={1} />}
                        border="rounded-xl"
                        height="h-[235px]"
                        placeholder="Opmerkingen"
                    />
                </div>
            </div>
        </div>
    );
};

export default Referral;
