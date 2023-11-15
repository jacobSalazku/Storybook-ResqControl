import { Button } from './Button';
import { useState } from 'react';

interface TriageOptionProps {
    triageSelection: string;
}

const TriageOption = ({ triageSelection }: TriageOptionProps) => {
    const [selectedTriage, setSelectedTriage] = useState<string | null>(null);

    const handleButtonClick = (triageSelection: string) => {
        setSelectedTriage(triageSelection);
    };

    return (
        <div className="w-full flex flex-row justify-between px-4">
            <Button
                label="T1"
                backgroundColor={
                    selectedTriage === 'T1'
                        ? 'bg-light-blue text-white'
                        : 'bg-white'
                }
                size="w-14"
                variant="rounded"
                onClick={() => handleButtonClick('T1')}
            />
            <Button
                label="T2"
                backgroundColor={
                    selectedTriage === 'T2'
                        ? 'bg-light-blue text-white'
                        : 'bg-white'
                }
                size="w-14"
                variant="rounded"
                onClick={() => handleButtonClick('T2')}
            />
            <Button
                label="T3"
                backgroundColor={
                    selectedTriage === 'T3'
                        ? 'bg-light-blue text-white'
                        : 'bg-white'
                }
                size="w-14"
                variant="rounded"
                onClick={() => handleButtonClick('T3')}
            />
        </div>
    );
};

export default TriageOption;
