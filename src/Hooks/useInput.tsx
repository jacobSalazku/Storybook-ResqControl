import { useState, ChangeEvent } from 'react';

interface InputOptions {
    startValue?: string;
}

export function useInput({ startValue = '' }: InputOptions = {}) {
    const [value, setValue] = useState(startValue);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setValue(event.target.value);
    };

    return { value, onChange: handleChange };
}
