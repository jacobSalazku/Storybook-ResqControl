import { useState } from 'react';

const TreatmentMenu = () => {
    const [activeItem, setActiveItem] = useState('Verzorging');

    const activateMenu = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-[58rem] h-11 flex flex-row justify-center items-center font-bold gap-8">
                <div
                    className={`cursor-pointer hover:border-b-4 border-b-light-blue px-5 py-2 ${
                        activeItem === 'Verzorging'
                            ? 'border-b-light-blue border-b-4'
                            : ''
                    }`}
                    onClick={() => activateMenu('Verzorging')}
                >
                    <p>Verzorging</p>
                </div>
                <div
                    className={`cursor-pointer hover:border-b-4 border-b-light-blue  px-5 py-2 ${
                        activeItem === 'Medicatie'
                            ? 'border-b-light-blue border-b-4'
                            : ''
                    }`}
                    onClick={() => activateMenu('Medicatie')}
                >
                    <p>Medicatie</p>
                </div>
                <div
                    className={`cursor-pointer hover:border-b-4 border-b-light-blue  px-5 py-2 ${
                        activeItem === 'Materiaal'
                            ? 'border-b-light-blue border-b-4'
                            : ''
                    }`}
                    onClick={() => activateMenu('Materiaal')}
                >
                    <p>Materiaal</p>
                </div>
                <div
                    className={`cursor-pointer hover:border-b-4 border-b-light-blue  px-5 py-2 ${
                        activeItem === 'Opmerkingen'
                            ? 'border-b-light-blue border-b-4'
                            : ''
                    }`}
                    onClick={() => activateMenu('Opmerkingen')}
                >
                    <p>Opmerkingen</p>
                </div>
            </div>
        </div>
    );
};

export default TreatmentMenu;
