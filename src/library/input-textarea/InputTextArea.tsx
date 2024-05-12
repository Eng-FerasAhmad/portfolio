import { ChangeEvent } from 'react';
import {
    ErrorLabelWrapper,
    InputTextContainer,
    InputWrapper,
    LabelWrapper,
} from './styles';

interface Props {
    label: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    changeHandler: (e: ChangeEvent<HTMLTextAreaElement> | undefined) => void;
}

export default function InputTextArea({
    label,
    placeholder,
    error,
    changeHandler,
}: Props): JSX.Element {
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
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
                required
                id={label}
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    handleChange(e)
                }
                rows={9}
            />
            {error && <ErrorLabelWrapper>{error}</ErrorLabelWrapper>}
        </InputTextContainer>
    );
}
