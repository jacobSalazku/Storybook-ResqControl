import React, { useState } from 'react';
import { PathologyData } from '../interfaces';
import IconButtonLogoRight from './IconButtonLogoRight';
// import PathologyItem from './PathologyItem';
import { IconCirclePlus } from '@tabler/icons-react';

const Pathology = () => {
    const [pathologies, setPathologies] = useState([
        {
            location: '',
            side: '',
        },
    ]);

    const handleAddPathology = () => {
        setPathologies((prevPathologies: PathologyData[]) => [
            ...prevPathologies,
            {
                location: '',
                side: '',
            },
        ]);
    };

    return (
        <div className="flex w-full flex-col justify-center gap-3 bg-white px-6 py-5 shadow-md sm:h-auto md:w-[432px]">
            <p className="font-semibold">Pathologiën</p>

            {/*pathologies.length === 0 ? null : (
                <div className="bg-white">
                    {pathologies.map(
                        (pathology: PathologyData, index: number) => (
                            <PathologyItem
                                key={index}
                                location={pathology.location}
                                side={pathology.side}
                                onDelete={() => DeletePathology(index)}
                            />
                        ),
                    )}
                </div>
                        ) */}

            <IconButtonLogoRight
                label="Voeg pathologie toe"
                icon={<IconCirclePlus color="#ffffFf" stroke={1.5} />}
                size="h-[40px] w-[212px]"
                variant="rounded"
                backgroundColor="border-p-green bg-p-green text-white shadow-md shadow-[#808080] hover:bg-[#52a072]"
                onClick={() => handleAddPathology()}
            />
        </div>
    );
};

export default Pathology;
