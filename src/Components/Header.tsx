import InputSelect from '../stories/inputSelect';
import IconButton from './IconButton';
import { IconLogout } from '@tabler/icons-react';

const Header = () => {
    const languages = ['NL', 'ENG'];
    return (
        <div className="w-[58rem] h-[48px] flex bg-dark-blue flex-row justify-between items-center px-11 py-4 text-white ">
            <div>Post Alpha - Tommorowland</div>
            <div className="flex flex-row items-center gap-4">
                <InputSelect
                    menuItems={...languages}
                    backgroundColor="bg-dark-blue "
                    textColor="text-white"
                    arrowColor="bg-white"
                />
                <IconButton
                    label="Afmelden"
                    size="w-[125px] h-[35px]"
                    backgroundColor="bg-p-red text-white border-p-red"
                    variant="rounded"
                    icon={<IconLogout color="#FFFFFF" />}
                />
            </div>
        </div>
    );
};

export default Header;
