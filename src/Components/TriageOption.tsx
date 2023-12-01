import { useState } from "react";
import { Button } from "./Button";

const TriageOption = () => {
    const [selectedTriage, setSelectedTriage] = useState<string | null>(null);

    const handleButtonClick = (triageSelection: string) => {
        setSelectedTriage((prevSelection) => (prevSelection === triageSelection ? null : triageSelection));
    };

    return (
        <div className="flex w-3/5 flex-row justify-between px-4">
            <Button
                label="T1"
                backgroundColor={selectedTriage === "T1" ? "bg-[#EE7E7A] text-white " : "bg-background-color"}
                size="h-[48px] w-[48px]"
                variant="rounded"
                onClick={() => handleButtonClick("T1")}
                shadow="shadow-md shadow-[#808080]"
            />
            <Button
                label="T2"
                backgroundColor={selectedTriage === "T2" ? "bg-p-red text-white" : "bg-background-color"}
                size="h-[48px] w-[48px]"
                variant="rounded"
                onClick={() => handleButtonClick("T2")}
                shadow="shadow-md shadow-[#808080]"
            />
            <Button
                label="T3"
                backgroundColor={selectedTriage === "T3" ? "bg-p-red text-white" : "bg-background-color"}
                size="h-[48px] w-[48px]"
                variant="rounded"
                onClick={() => handleButtonClick("T3")}
                shadow="shadow-md shadow-[#808080]"
            />
        </div>
    );
};

export default TriageOption;
