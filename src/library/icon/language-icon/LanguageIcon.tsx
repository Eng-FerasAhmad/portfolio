import { IoLanguage } from 'react-icons/io5';
import { LanguageIconWrapper } from './styles';
import { color } from '../../../style/color';

interface Props {
  clickHandler: () => void;
  isDark: boolean;
}

export default function LanguageIcon({ isDark, clickHandler }: Props) {
  return (
    <LanguageIconWrapper onClick={clickHandler}>
      <IoLanguage size={24} color={isDark ? color.light : color.dark} />
    </LanguageIconWrapper>
  );
}
