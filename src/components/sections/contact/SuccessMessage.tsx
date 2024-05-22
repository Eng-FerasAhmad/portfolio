import { ReactElement, useContext } from 'react';
import {
    MailSentWrapper,
    SentTextWrapper,
} from 'components/sections/contact/styles';
import { ThemeContext } from 'context/ThemeContext';
import CheckIcon from 'src/library/icon/check/CheckIcon';

interface Props {
    messageSent: string;
}

export default function SuccessMessage({ messageSent }: Props): ReactElement {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <MailSentWrapper>
            <CheckIcon isDark={isDarkTheme!} />
            <SentTextWrapper>{messageSent}</SentTextWrapper>
        </MailSentWrapper>
    );
}
