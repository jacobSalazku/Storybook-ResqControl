import { useState } from 'react';
import Input from '../Components/Input';
import InputSelect from '../Components/inputSelect';
import { languages, nationalities } from '../Components/patientData';
import { useInput } from '../Hooks/useInput';

const languagesAbbrivaition = ['NL', 'ENG'];
const genderArr = ['Man', 'Vrouw'];

const Registration = () => {
    const [date, setDate] = useState(new Date());
    const firstName = useInput();
    const lastName = useInput();
    const emergencyContact = useInput();

    return (
        <div className="w-full flex flex-col items-center justify-start gap-7 ">
            <div className="w-full h-[78px] bg-dark-blue px-4 py-5 flex flex-row justify-between items-center">
                <h1 className="text-white">Inschrijving</h1>
                <InputSelect
                    menuItems={...languagesAbbrivaition}
                    backgroundColor="bg-dark-blue "
                    textColor="text-white"
                    arrowColor="bg-white"
                    text-color="text-#497DAE]"
                />
            </div>
            <div className="w-full flex flex-col gap-4 px-4">
                <Input
                    label="Voornaam*"
                    size="w-full h-[48px]"
                    placeholder="Voornaam"
                    type="text"
                    border="rounded-full border-light-blue"
                    value={firstName.value}
                    onChange={firstName.onChange}
                    required
                />
                <div>{firstName.value}</div>
                <Input
                    label="Achternaam"
                    size="w-full h-[48px]"
                    placeholder="Achternaam"
                    type="text"
                    border="rounded-full border-light-blue"
                    value={lastName.value}
                    onChange={lastName.onChange}
                />
                <div>{lastName.value}</div>
                <div className="flex flex-col gap-3">
                    <p>Geslacht</p>
                    <InputSelect
                        title="Selecteer je geslacht"
                        menuItems={...genderArr}
                        backgroundColor="bg-white"
                        height="h-[48px]"
                        borderColor="border-light-blue border-2"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <p>Nationaliteit</p>
                    <InputSelect
                        title="Selecteer je geslacht"
                        menuItems={nationalities}
                        backgroundColor="bg-white"
                        height="h-[48px]"
                        borderColor="border-light-blue border-2"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <p>Taal</p>
                    <InputSelect
                        title="Selecteer je geslacht"
                        menuItems={languages}
                        backgroundColor="bg-white"
                        height="h-[48px]"
                        borderColor="border-light-blue border-2"
                    />
                </div>

                <Input
                    label="Geboorte datum"
                    size="w-full h-[48px]"
                    placeholder="dd/mm/yyyy"
                    type="date"
                    border="rounded-full border-light-blue"
                />
                <Input
                    label="Contactpersoon (ICE)"
                    size="w-full h-[48px]"
                    placeholder="Nummer ICE"
                    type="text"
                    border="rounded-full border-light-blue"
                    value={emergencyContact.value}
                    onChange={emergencyContact.onChange}
                />
            </div>
        </div>
    );
};

export default Registration;
