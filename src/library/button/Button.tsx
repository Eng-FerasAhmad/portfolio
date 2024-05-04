import { ButtonContainer } from './styles';

interface Props {
    label: string;
    clickHandler: () => void;
}

export default function Button({ label, clickHandler }: Props): JSX.Element {
    return (
        <ButtonContainer onClick={clickHandler} data-testid="button">
            <span>{label}</span>
        </ButtonContainer>
    );
}
