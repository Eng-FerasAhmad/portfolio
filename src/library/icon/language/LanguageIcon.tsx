import { ReactElement } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { color } from '../../../style/color';
import { LanguageIconWrapper } from './styles';

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
            <IoLanguage size={24} color={isDark ? color.light : color.dark} />
        </LanguageIconWrapper>
    );
}
