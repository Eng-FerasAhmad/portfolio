import { ReactElement } from 'react';
import {
    MailSentWrapper,
    SentTextWrapper,
} from 'components/sections/contact/styles';
import CheckIcon from 'src/library/icon/check/CheckIcon';

interface Props {
    messageSent: string;
}

export default function SuccessMessage({ messageSent }: Props): ReactElement {
    return (
        <MailSentWrapper>
            <CheckIcon />
            <SentTextWrapper>{messageSent}</SentTextWrapper>
        </MailSentWrapper>
    );
}
