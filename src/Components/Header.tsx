import IconButton from './IconButton';
import { IconDoorExit } from '@tabler/icons-react';
import InputSelect from './InputSelect';

const Header = () => {
    const languages = ['NL', 'ENG'];
    return (
        <div className="flex h-[48px] w-full flex-row items-center justify-between bg-dark-blue px-11 py-4 text-white ">
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
                    icon={<IconDoorExit color="#FFFFFF" />}
                />
            </div>
        </div>
    );
};

export default Header;
