import { useState } from 'react';
import {
    ContactContainer,
    ContactTitleWrapper,
    ContactItemContainer,
} from './styles';

export default function Contact(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    const clickHandler = (): void => {
        setShow(!show);
    };

    return (
        <ContactContainer>
            <ContactTitleWrapper onClick={clickHandler}>
                Contact
            </ContactTitleWrapper>
            {show && <ContactItemContainer>Coming soon!</ContactItemContainer>}
        </ContactContainer>
    );
}
