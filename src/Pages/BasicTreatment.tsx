import TitleCard from '../Components/TitleCard';
import Header from '../Components/Header';
import IconButton from '../Components/IconButton';
import TreatmentMenu from '../Components/TreatmentMenu';
import Icon from '../Components/icon';
import { StethoscopeIcon } from '../stories/helpers/ClientDataFunctions';
import TreatmentDash from '../Components/TreatmentDash';
import { useState } from 'react';

const BasicTreatment = () => {
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
                    icon={StethoscopeIcon}
                    rightButton={
                        <IconButton
                            label="Wijzigingen opslaan"
                            backgroundColor=" border-[#497DAE] bg-[#497DAE] text-white shadow-lg "
                            size="h-[40px] w-[193px]"
                            icon={
                                <Icon
                                    icon="icon-tabler-device-floppy"
                                    color="#ffffff"
                                    path={
                                        <>
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                            <path d="M14 4l0 4l-6 0l0 -4" />
                                        </>
                                    }
                                />
                            }
                            variant="rounded-sm"
                        />
                    }
                />
            </div>
            <TreatmentMenu />
            <div className="pt-5">
                <TreatmentDash
                    title="Buikpijn"
                    topLeftLogo={
                        <Icon
                            icon="icon-tabler-vaccine"
                            color="#497DAE"
                            path={
                                <>
                                    <path d="M17 3l4 4" />
                                    <path d="M19 5l-4.5 4.5" />
                                    <path d="M11.5 6.5l6 6" />
                                    <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
                                    <path d="M7.5 12.5l1.5 1.5" />
                                    <path d="M10.5 9.5l1.5 1.5" />
                                    <path d="M3 21l3 -3" />
                                </>
                            }
                        />
                    }
                    searchIcon={
                        <IconButton
                            icon={
                                <Icon
                                    icon="icon-tabler-search"
                                    color="#497DAE"
                                    path={
                                        <>
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                            <path d="M21 21l-6 -6" />
                                        </>
                                    }
                                />
                            }
                            variant="rounded-full"
                            size="w-[130px] h-[40px]"
                            backgroundColor="border-light-blue"
                            onClick={toggleSearchInput}
                        />
                    }
                />
                <TreatmentDash
                    title="Buikpijn"
                    topLeftLogo={
                        <Icon
                            icon="icon-tabler-vaccine"
                            color="#497DAE"
                            path={
                                <>
                                    <path d="M17 3l4 4" />
                                    <path d="M19 5l-4.5 4.5" />
                                    <path d="M11.5 6.5l6 6" />
                                    <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
                                    <path d="M7.5 12.5l1.5 1.5" />
                                    <path d="M10.5 9.5l1.5 1.5" />
                                    <path d="M3 21l3 -3" />
                                </>
                            }
                        />
                    }
                    searchIcon={
                        <IconButton
                            icon={
                                <Icon
                                    icon="icon-tabler-search"
                                    color="#497DAE"
                                    path={
                                        <>
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                            <path d="M21 21l-6 -6" />
                                        </>
                                    }
                                />
                            }
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

export default BasicTreatment;
