import { TreatmentDashProps } from '../interfaces';
import { useState } from 'react';
import {
    crt,
    FAST,
    motoricResponse,
    OgenArray,
    pupils,
    verbalResponse,
    wapaArr,
} from './patientData';
import IconButton from './IconButton';
import { useInput } from '../Hooks/useInput';
import InputSpan from './InputSpan';
import { Button } from './Button';
import { IconCheck, IconChevronDown, IconTrashX } from '@tabler/icons-react';

const ParametersDash = ({ topLeftLogo, title }: TreatmentDashProps) => {
    const breathing = useInput();
    const heartbeat = useInput();
    const saturation = useInput();
    const collectionTime = useInput();
    const highBloodPressure = useInput();
    const lowBloodPressure = useInput();
    const temperature = useInput();
    const glycmie = useInput();

    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    return (
        <div className="flex w-full flex-row justify-center py-2">
            <div
                className={`w-[55rem] ${
                    show
                        ? 'transition-max-h h-auto transition-opacity duration-300 ease-in-out'
                        : 'h-[4rem]'
                } rounded-b-xl rounded-t-xl border-4 border-background-color`}
            >
                <div className="justify flex h-[3.7rem] w-[54.6rem] flex-row items-center justify-between rounded border-background-color px-5">
                    <div className="ml-2 flex flex-row items-center justify-start gap-4">
                        {topLeftLogo}
                        <div>
                            <p className="flex flex-row items-center text-lg font-medium text-p-text-color">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-7">
                        <div className="cursor-pointer" onClick={toggleShow}>
                            <IconChevronDown
                                className={`transform transition-all ${
                                    show ? '-rotate-180' : 'rotate-0'
                                }`}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`transition-max-h transition-opacity duration-300 ease-in-out ${
                        show ? '-h-[17.rem] opacity-100' : 'max-h-0 opacity-0'
                    } my-4  mb-2 flex w-full  flex-col gap-8 px-8`}
                >
                    <div>
                        <h2 className="text font-semibold">
                            GlasCow Coma Schaal
                        </h2>
                        <div className="flex flex-col items-center ">
                            <div className="flex w-full flex-row justify-between pl-2">
                                <div>
                                    <div className="py-4 pl-2">
                                        <h2>Openen van ogen</h2>
                                    </div>
                                    <div className="flex flex-row gap-2 ">
                                        {OgenArray.map((ogen) => (
                                            <div key={ogen.id}>
                                                <Button
                                                    backgroundColor="bg-white border-light-blue text-light-blue"
                                                    size="h-[40px] px-4"
                                                    variant="rounded-full"
                                                    label={ogen.name}
                                                    icon={
                                                        <IconCheck color="#FFFFFF" />
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="py-4 pl-2">
                                            <h2> Verbaal Antwoord</h2>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            {verbalResponse.map((response) => (
                                                <div key={response.id}>
                                                    <Button
                                                        backgroundColor="bg-white border-light-blue text-light-blue"
                                                        size="h-[40px] px-4"
                                                        variant="rounded-full"
                                                        label={response.name}
                                                        icon={
                                                            <IconCheck color="#FFFFFF" />
                                                        }
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="py-4 pl-2">
                                            <h2>Motorisch Antwoord</h2>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            {motoricResponse.map(
                                                (motoricResponse) => (
                                                    <div
                                                        key={motoricResponse.id}
                                                    >
                                                        <Button
                                                            backgroundColor="bg-white border-light-blue text-light-blue"
                                                            size="h-[40px] px-4"
                                                            variant="rounded-full"
                                                            label={
                                                                motoricResponse.name
                                                            }
                                                            icon={
                                                                <IconCheck color="#FFFFFF" />
                                                            }
                                                        />
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>WAPA</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {wapaArr.map((wapaItem) => (
                                        <div key={wapaItem.id}>
                                            <Button
                                                backgroundColor="bg-white border-light-blue text-light-blue"
                                                size="h-[40px] px-4"
                                                variant="rounded-full"
                                                label={wapaItem.name}
                                                icon={
                                                    <IconCheck color="#FFFFFF" />
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>Fast</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {FAST.map((item) => (
                                        <div key={item.id}>
                                            <Button
                                                backgroundColor="bg-white border-light-blue text-light-blue"
                                                size="h-[40px] px-4"
                                                variant="rounded-full"
                                                label={item.name}
                                                icon={
                                                    <IconCheck color="#FFFFFF" />
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>Pupillen</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {pupils.map((item) => (
                                        <div key={item.id}>
                                            <Button
                                                backgroundColor="bg-white border-light-blue text-light-blue"
                                                size="h-[40px] px-4"
                                                variant="rounded-full"
                                                label={item.name}
                                                icon={
                                                    <IconCheck color="#FFFFFF" />
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pl-2 pt-8">
                            {' '}
                            <InputSpan
                                label="Ademhaling"
                                size="h-[40px] w-full"
                                type="number"
                                value={breathing.value}
                                onChange={breathing.onChange}
                                spanString="/min"
                            />
                            <InputSpan
                                label="Hartslag"
                                size="h-[40px] w-full"
                                type="number"
                                value={heartbeat.value}
                                onChange={heartbeat.onChange}
                                spanString="BPM"
                            />
                        </div>
                        <div className="mt-6 ">
                            <div className="py-4 pl-2">
                                {' '}
                                <h2>Capillaire refill (CRT)</h2>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start gap-16">
                                    {crt.map((crtItem) => (
                                        <div key={crtItem.id}>
                                            <Button
                                                backgroundColor="bg-white border-light-blue text-light-blue"
                                                size="h-[40px] px-4"
                                                variant="rounded-full"
                                                label={crtItem.name}
                                                icon={
                                                    <IconCheck color="#FFFFFF" />
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pl-2 pt-8">
                                {' '}
                                <InputSpan
                                    label="spO2"
                                    size="h-[40px] w-full"
                                    type="number"
                                    value={saturation.value}
                                    onChange={saturation.onChange}
                                    spanString="%"
                                />
                            </div>
                            <div className="pl-2 pt-8">
                                {' '}
                                <InputSpan
                                    label="Temperatuur"
                                    size="h-[40px] w-full"
                                    type="number"
                                    spanString="°C"
                                    value={temperature.value}
                                    onChange={temperature.onChange}
                                />
                            </div>
                            <div className="pl-2 pt-8">
                                {' '}
                                <InputSpan
                                    label="Glycemie"
                                    size="h-[40px] w-full"
                                    type="number"
                                    spanString="mg/dl"
                                    value={glycmie.value}
                                    onChange={glycmie.onChange}
                                />
                            </div>
                            <div className="pl-2 pt-8">
                                <label htmlFor="timeInput">Bloeddruk</label>{' '}
                                <div>
                                    <input
                                        type="number"
                                        className="mt-4 w-1/2 border-2 px-4"
                                        placeholder="Hoog( mm Hg)"
                                        value={highBloodPressure.value}
                                        onChange={highBloodPressure.onChange}
                                    />
                                    <input
                                        type="number"
                                        className="mt-4 w-1/2 border-2 px-4"
                                        placeholder="Laag( mm Hg)"
                                        value={lowBloodPressure.value}
                                        onChange={lowBloodPressure.onChange}
                                    />
                                </div>
                            </div>
                            <div className="pl-2 pt-8">
                                {' '}
                                <InputSpan
                                    label="Pijnscore"
                                    size="h-[40px] w-full"
                                    placeholder="sVas(1-10)"
                                    type="number"
                                    spanString="sVas(1-10)"
                                />
                            </div>
                            <div className="flex w-full flex-row justify-between pl-2 pt-8">
                                {' '}
                                <InputSpan
                                    label="Tijdstip van Afname"
                                    size="h-[40px] w-[270px]"
                                    type="time"
                                    value={collectionTime.value}
                                    onChange={collectionTime.onChange}
                                />
                                <div className="flex flex-row items-end justify-end">
                                    <IconButton
                                        icon={<IconTrashX color="#ffffff" />}
                                        variant="rounded"
                                        size="w-[132px] h-[44px]"
                                        backgroundColor="bg-p-red text-white border-p-red"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParametersDash;
