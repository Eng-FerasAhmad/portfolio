import { ReactElement } from 'react';
import { ThemeIconWrapper } from './styles';
import MoonIcon from 'src/library/action-icons/moon/MoonIcon';
import SunIcon from 'src/library/action-icons/sun/SunIcon';

interface Props {
    clickHandler: () => void;
    isDark: boolean;
}

export default function ThemeIcon({
    isDark,
    clickHandler,
}: Props): ReactElement {
    return (
        <ThemeIconWrapper onClick={clickHandler}>
            {isDark ? <SunIcon /> : <MoonIcon />}
        </ThemeIconWrapper>
    );
}
