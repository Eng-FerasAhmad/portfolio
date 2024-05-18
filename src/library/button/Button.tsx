import { ButtonContainer } from './styles';

interface Props {
    label: string;
    clickHandler: () => void;
    color: string;
}

export default function Button({ label,color, clickHandler }: Props): JSX.Element {
    return (
        <ButtonContainer onClick={clickHandler} data-testid="button" color={color}>
            <span>{label}</span>
        </ButtonContainer>
    );
}
