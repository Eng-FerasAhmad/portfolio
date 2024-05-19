import { ButtonContainer } from './styles';

interface Props {
    label: string;
    clickHandler: () => void;
    color: string;
    secondaryColor: string;
}

export default function Button({
    label,
    color,
    clickHandler,
    secondaryColor,
}: Props): JSX.Element {
    return (
        <ButtonContainer
            onClick={clickHandler}
            data-testid="button"
            color={color}
            secondaryColor={secondaryColor}
        >
            <span>{label}</span>
        </ButtonContainer>
    );
}
