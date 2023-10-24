import { useState } from 'react'

import TitleCard from './stories/TitleCard'
import { EyeLogo, SofaIcon } from './stories/helpers/ClientDataFunctions'
import { Button } from './Components/Button'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TitleCard
                rightLogo={EyeLogo}
                title="Basis Overzicht"
                button={
                    <Button
                        icon={SofaIcon}
                        size="w-34"
                        backgroundColor="bg-dark-blue"
                        variant="roundedn"
                    />
                }
            />
        </>
    )
}

export default App
