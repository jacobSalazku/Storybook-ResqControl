import InputSelect from '../stories/inputSelect';
import IconButton from './IconButton';
import Icon from './icon';
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
                    icon={
                        <Icon
                            icon="icon-tabler-logout"
                            color="#FFFFFF"
                            path={
                                <>
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M9 12h12l-3 -3" />
                                    <path d="M18 15l3 -3" />
                                </>
                            }
                        />
                    }
                />
            </div>
        </div>
    );
};

export default Header;
