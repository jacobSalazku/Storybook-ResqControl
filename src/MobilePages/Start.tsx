import { Button } from '../Components/Button';

const Start = () => {
    return (
        <div className="flex h-[665px] w-[414px] flex-col items-center justify-center gap-7 bg-dark-blue">
            <div className="flex h-[285px] w-[285px] flex-row  border-2 bg-background-color shadow-lg shadow-black">
                <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                    <h1 className="text-[24px] text-[#35393C]">
                        Wat is Patiënt Care
                    </h1>

                    <p className="text-center text-[#35393C] opacity-40">
                        Bij Patiënt care gebruiken wij de informatie die u
                        invult om u zo snel mogelijk te behandelen.
                    </p>
                </div>
            </div>
            <div>
                <Button
                    label="Start inschrijving"
                    size="w-[285px] h-[56px]"
                    variant="rounded-full"
                    backgroundColor="text-white font-semibold bg-[#41BA71] border-[#41BA71] hover:bg-[#2fc46b]"
                />
            </div>
        </div>
    );
};

export default Start;
