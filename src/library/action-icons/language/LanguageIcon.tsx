import { ReactElement } from 'react';
import { LanguageIconWrapper } from './styles';
import LangIcon from 'src/library/action-icons/lang/LangIcon';
import { color } from 'style/color';

interface Props {
    clickHandler: () => void;
    isDark: boolean;
}

export default function LanguageIcon({
    isDark,
    clickHandler,
}: Props): ReactElement {
    return (
        <LanguageIconWrapper onClick={clickHandler}>
            <LangIcon
                width={28}
                height={28}
                color={isDark ? color.light : color.dark}
                fill={isDark ? color.dark : color.light}
            />
        </LanguageIconWrapper>
    );
}
