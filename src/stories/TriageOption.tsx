import { IconButton } from './iconButton'
import { AllergiesIcon } from './helpers/ClientDataFunctions'
import { Button } from './Button'
import { useState } from 'react'

interface TriageOptionProps {
    triageSelection: string
}
const TriageOption = ({ triageSelection }: TriageOptionProps) => {
    const [selectedTriageButton, setSelectedTriageButton] =
        useState(triageSelection)

    //const SelectTriage = (triageButton: string) => {
    //    setSelectedTriageButton(triageButton)
    //}

    return (
        <div className="w-full flex flex-row justify-between px-4">
            <IconButton
                backgroundColor="bg-brown-accent border-brown-accent"
                size="w-14"
                icon={AllergiesIcon}
                variant="rounded"
            />

            <Button
                label="T1"
                backgroundColor={
                    selectedTriageButton === 'T1'
                        ? 'bg-dark-green text-brown-accent'
                        : 'bg-white text-dark-green '
                }
                size="w-14"
                variant="rounded"
            />
            <Button
                label="T2"
                backgroundColor={
                    selectedTriageButton === 'T2'
                        ? 'bg-dark-green text-brown-accent'
                        : 'bg-white text-dark-green '
                }
                size="w-14"
                variant="rounded"
            />
            <Button
                label="T3"
                backgroundColor={
                    selectedTriageButton === 'T3'
                        ? 'bg-dark-green text-brown-accent'
                        : 'bg-white text-dark-green '
                }
                size="w-14"
                variant="rounded"
            />
        </div>
    )
}

export default TriageOption
