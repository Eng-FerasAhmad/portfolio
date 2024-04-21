import { ChangeEvent } from 'react';
import { InputTextContainer } from './styles';

interface Props {
    label: string;
    placeholder: string;
    changeHandler: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
}

export default function InputText({
    label,
    placeholder,
    changeHandler,
}: Props): JSX.Element {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event?.target && event.target.value.length > 0) {
            changeHandler(event);
        } else {
            changeHandler(undefined);
        }
    };

    return (
        <InputTextContainer data-testid="input">
            <label htmlFor={label}>{label}</label>
            <input
                type="text"
                id={label}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </InputTextContainer>
    );
}
