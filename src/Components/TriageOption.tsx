import { TriageButton } from './TriageButton';

const TriageOption = () => {
    return (
        <div className="flex h-[100px] w-[432px] flex-col gap-3 bg-white px-4 py-5 shadow-md">
            <p className="font-base">Triage code</p>
            <div className="flex h-[40px] flex-row items-center justify-between rounded border bg-inherit px-[2px] py-[2px] shadow-md">
                <TriageButton label="T1" selectedColor="bg-p-red text-white" />
                <TriageButton
                    label="T2"
                    selectedColor="bg-p-yellow text-white"
                />
                <TriageButton
                    label="T3"
                    selectedColor="bg-p-green text-white"
                />
                <TriageButton label="T4" selectedColor="bg-p-red text-white" />
            </div>
        </div>
    );
};

export default TriageOption;
