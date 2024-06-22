import { ReactElement } from 'react';
import {
    Check,
    Checkmark,
    Circle,
    SvgContainer,
} from 'src/library/action-icons/check/style';

interface Props {
    isDark: boolean;
}

export default function CheckIcon({ isDark }: Props): ReactElement {
    return (
        <SvgContainer>
            <Checkmark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <Circle cx="26" cy="26" r="25" fill="none" isDark={isDark} />
                <Check fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </Checkmark>
        </SvgContainer>
    );
}
