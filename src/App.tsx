import { ExitIcon } from './stories/helpers/ClientDataFunctions';
import { Button } from './Components/Button';
import IconButton from './Components/IconButton';
import CheckIcon from './Stories/icons/CheckIcon';

function App() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className=" w-screen h-1/2 border-2 border-black  flex flex-row gap-2 flex-wrap">
                <IconButton
                    backgroundColor="bg-[#EE7E7A] border-[#EE7E7A] text-white "
                    size="w-32"
                    icon={ExitIcon}
                    variant="rounded-full"
                />
                <Button
                    label="Exit"
                    primary={false}
                    backgroundColor="bg-[#EE7E7A] border-[#EE7E7A] text-white "
                    size="w-32"
                    variant="rounded-full"
                />

                <Button
                    label="T1"
                    primary={false}
                    backgroundColor="bg-white text-dark-blue hover:bg-light-blue hover:text-brown-accent"
                    size="w-14"
                    variant="rounded"
                />

                <Button
                    label="Kleine wondzorg"
                    backgroundColor="bg-white text-dark-blue border-dark-blue"
                    size="w-44"
                    variant="rounded-full"
                />
                <Button
                    primary={true}
                    label="Kleine wondzorg"
                    backgroundColor=" bg-light-blue text-white"
                    size="w-44"
                    variant="rounded-full"
                />
                <Button
                    primary={true}
                    label="Kleine wondzorg"
                    size="w-44"
                    selected={false}
                    variant="rounded-full"
                    icon={<CheckIcon />}
                />

                <Button
                    primary={true}
                    label="volgende"
                    backgroundColor="bg-[#0648B3] text-white border-p-blue"
                    size="w-32"
                    variant="rounded-lg"
                />
                <Button
                    primary={true}
                    label="start"
                    backgroundColor="bg-light-blue text-white border-light-blue"
                    size="w-32"
                    variant="rounded-lg"
                />
                <Button
                    label="Text"
                    primary={true}
                    backgroundColor="bg-white text-dark-blue border-dark-blue border  hover:text-white hover:bg-light-blue hover:border-white"
                    size="w-44"
                    variant="rounded-full"
                    selected={true}
                />
            </div>
        </div>
    );
}

export default App;
