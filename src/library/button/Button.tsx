import { ButtonContainer } from './styles';

interface Props {
  label: string;
  clickHandler: () => void;
}

export default function Button({ label, clickHandler }: Props) {
  return (
    <ButtonContainer onClick={clickHandler} data-testid="button">
      {label}
    </ButtonContainer>
  );
}
