import { ReactElement } from 'react';
import { LanguageIconWrapper } from './styles';
import LangIcon from 'src/library/icon/lang/LangIcon';
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
                iconWidth={28}
                iconHeight={28}
                color={isDark ? color.light : color.dark}
            />
        </LanguageIconWrapper>
    );
}
