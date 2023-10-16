import { Button } from './Button'
import { useState } from 'react'
interface triageOptionProps {
    triageSelection: string
}

const TriageOption = ({ triageSelection }: triageOptionProps) => {
    const [selectTriage, setSelectTriage] = useState('')

    const handleButtonClick = (triageSelection: string) => {
        setSelectTriage(triageSelection)
    }

    return (
        <div className="w-full flex flex-row justify-between px-4">
            <Button
                label="T1"
                backgroundColor={
                    triageSelection === 'T1'
                        ? 'bg-dark-green text-brown-accent text'
                        : 'bg-white'
                }
                size="w-14"
                variant="rounded"
                onClick={() => handleButtonClick('T1')}
            />
            <Button
                label="T2"
                backgroundColor={
                    triageSelection === 'T2'
                        ? 'bg-dark-green text-brown-accent text'
                        : ''
                }
                size="w-14"
                variant="rounded"
                onClick={() => handleButtonClick('T2')}
            />
            <Button
                label="T3"
                backgroundColor={
                    selectTriage === 'T3'
                        ? 'bg-dark-green text-brown-accent text'
                        : ''
                }
                size="w-14"
                variant="rounded"
                onClick={() => handleButtonClick('T3')}
            />
        </div>
    )
}

export default TriageOption
