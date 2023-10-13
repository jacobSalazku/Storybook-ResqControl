import { IconButton } from './iconButton'
import { AllergiesIcon } from './helpers/ClientDataFunctions'
import { Button } from './Button'
import { useState } from 'react'

const TriageOption = () => {
    const [selectedTriageButton, setSelectedTriageButton] = useState('')

    const SelectTriage = (triageButton: string) => {
        setSelectedTriageButton(triageButton)
    }

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
                        : 'bg-white text-dark-green hover:bg-dark-green hover:text-brown-accent'
                }
                size="w-14"
                variant="rounded"
                onClick={() => SelectTriage('T1')}
            />
            <Button
                label="T2"
                backgroundColor={
                    selectedTriageButton === 'T2'
                        ? 'bg-dark-green text-brown-accent'
                        : 'bg-white text-dark-green hover:bg-dark-green hover:text-brown-accent'
                }
                size="w-14"
                variant="rounded"
                onClick={() => SelectTriage('T2')}
            />
            <Button
                label="T3"
                backgroundColor={
                    selectedTriageButton === 'T3'
                        ? 'bg-dark-green text-brown-accent'
                        : 'bg-white text-dark-green hover:bg-dark-green hover:text-brown-accent'
                }
                size="w-14"
                variant="rounded"
                onClick={() => SelectTriage('T3')}
            />
        </div>
    )
}

export default TriageOption
