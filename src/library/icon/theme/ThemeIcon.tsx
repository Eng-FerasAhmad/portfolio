import { IoMoon, IoSunny } from 'react-icons/io5';
import { color } from '../../../style/color';
import { ThemeIconWrapper } from './styles';

interface Props {
    clickHandler: () => void;
    isDark: boolean;
}

export default function ThemeIcon({
    isDark,
    clickHandler,
}: Props): JSX.Element {
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
