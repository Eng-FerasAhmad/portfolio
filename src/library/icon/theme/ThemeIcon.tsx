import { IoMoon, IoSunny } from 'react-icons/io5';
import { ThemeIconWrapper } from './styles';
import { color } from '../../../style/color';

interface Props {
  clickHandler: () => void;
  isDark: boolean;
}

export default function ThemeIcon({ isDark, clickHandler }: Props) {
  return (
    <ThemeIconWrapper onClick={clickHandler}>
      {isDark ? (
        <IoSunny size={24} color={color.light} />
      ) : (
        <IoMoon size={24} color={color.dark} />
      )}
    </ThemeIconWrapper>
  );
}
