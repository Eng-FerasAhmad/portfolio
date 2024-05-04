import { useState } from 'react';
import Button from '../../../library/button/Button';
import InputText from '../../../library/input-text/InputText';
import InputTextArea from '../../../library/input-textarea/InputTextArea';
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

    const changeHandler = (): void => {};

    const submitHandler = (): void => {};

    return (
        <ContactContainer>
            <ContactTitleWrapper onClick={clickHandler}>
                Contact
            </ContactTitleWrapper>
            {show && (
                <ContactItemContainer>
                    <InputText label="Name" changeHandler={changeHandler} />
                    <InputText label="Subject" changeHandler={changeHandler} />
                    <InputText
                        label="E-Mail"
                        changeHandler={changeHandler}
                        type="email"
                    />
                    <InputTextArea
                        label="Message"
                        changeHandler={changeHandler}
                    />
                    <Button label="Send" clickHandler={submitHandler} />
                </ContactItemContainer>
            )}
        </ContactContainer>
    );
}
