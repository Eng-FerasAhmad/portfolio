import './styles.scss';

interface Props {
  label: string;
  clickHandler: () => void;
}

export default function Button({ label, clickHandler }: Props) {
  return (
    <button className="button" onClick={clickHandler} data-testid="button">
      {label}
    </button>
  );
}
