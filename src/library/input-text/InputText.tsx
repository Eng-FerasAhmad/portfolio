import { ChangeEvent } from 'react';
import {
    InputTextContainer,
    InputWrapper,
    LabelWrapper,
    ErrorLabelWrapper,
} from './styles';

interface Props {
    label: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    type?: 'email' | 'text';
    changeHandler: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
}

export default function InputText({
    label,
    placeholder,
    required,
    error,
    type = 'text',
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
            <LabelWrapper htmlFor={label}>{label}</LabelWrapper>
            <InputWrapper
                type={type}
                required={required}
                id={label}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {error && <ErrorLabelWrapper>{error}</ErrorLabelWrapper>}
        </InputTextContainer>
    );
}
