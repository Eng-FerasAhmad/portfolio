import { ReactElement } from 'react';
import { ThemeIconWrapper } from './styles';
import MoonIcon from 'src/library/icon/moon/MoonIcon';
import SunIcon from 'src/library/icon/sun/SunIcon';

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
            {isDark ? (
                <SunIcon iconHeight={28} iconWidth={28} />
            ) : (
                <MoonIcon iconHeight={28} iconWidth={28} />
            )}
        </ThemeIconWrapper>
    );
}
