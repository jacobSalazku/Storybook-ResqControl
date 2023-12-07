import { IconCircleCheck, IconVaccine, IconX } from '@tabler/icons-react';
import Header from '../Components/Header';
import ParametersDash from '../Components/ParametersDash';
import { proceedsArr } from '../Components/patientData';

import TreatmentMenu from '../Components/TreatmentMenu';
import { stringTime } from '../stories/helpers/DateTime';
import TitleCardButton from '../Components/TitleCardButton';
import TitleCardTreatmentMenu from '../Components/TitleCardTreatmentMenu';

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

                <TitleCardTreatmentMenu
                    title="Behandeling"
                    rightButton={
                        <TitleCardButton
                            label="Behandelingen afronden"
                            backgroundColor=" border-p-green bg-p-green text-white shadow-lg "
                            size="h-[40px] w-auto"
                            icon={<IconCircleCheck />}
                            variant="rounded"
                        />
                    }
                    leftButton={
                        <TitleCardButton
                            label="Behandelingen afronden"
                            backgroundColor=" border-p-red bg-p-red text-white shadow-lg "
                            size="h-[40px] w-auto"
                            icon={<IconX />}
                            variant="rounded"
                        />
                    }
                    menu={
                        <TreatmentMenu menuItems={menuItems} activeTitle={0} />
                    }
                />
            </div>

            <ParametersDash
                title={stringTime}
                topLeftLogo={<IconVaccine color="#497DAE" />}
                Itemsarr={proceedsArr}
            />
        </div>
    );
};

export default Parameters;
