import { ChangeEvent } from 'react';
import './style.scss';

interface Props {
  label: string;
  placeholder: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
}

export default function InputText({ label, placeholder, changeHandler }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target && event.target.value.length > 0) {
      changeHandler(event);
    } else {
      changeHandler(undefined);
    }
  };

  return (
    <div className="input-text" data-testid="input">
      <label htmlFor={label} className='input-text-label'>{label}</label>
      <input type="text" id={label} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}
