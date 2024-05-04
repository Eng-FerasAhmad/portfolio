import { useState } from 'react';
import Button from '../../../library/button/Button';
import IconSelector from '../../../library/icon-selector/IconSelector';
import InputText from '../../../library/input-text/InputText';
import InputTextArea from '../../../library/input-textarea/InputTextArea';
import ProgressBarComponent from '../../../library/progressbar/ProgressBar';
import { color } from '../../../style/color';
import {
    ContactContainer,
    ContactItemContainer,
    ContactTitleWrapper,
    ItemWrapper,
    ItemsContainer,
    SocialMediaWrapper,
} from './styles';
import useContact from './useContact';

export default function Contact(): JSX.Element {
    const { viewModel } = useContact();
    const [show, setShow] = useState<boolean>(false);

    const clickHandler = (): void => {
        setShow(!show);
    };

    const changeHandler = (): void => {};

    const submitHandler = (): void => {};

    return (
        <ContactContainer data-testid="contact">
            <ContactTitleWrapper onClick={clickHandler}>
                {viewModel?.entityHeader}
            </ContactTitleWrapper>

            {show && (
                <>
                    <ItemsContainer>
                        {viewModel?.media.map((item) => {
                            return (
                                <ItemWrapper
                                    key={item.icon}
                                    href={item.link}
                                    target="_blank"
                                >
                                    <div>
                                        <IconSelector iconName={item.icon} />
                                    </div>
                                    <div>{item.name}</div>
                                </ItemWrapper>
                            );
                        })}
                    </ItemsContainer>

                    <SocialMediaWrapper>
                        <div>{viewModel?.description}</div>
                        <ProgressBarComponent
                            color={color.yellow}
                            completed={100}
                        />
                    </SocialMediaWrapper>

                    <ContactItemContainer data-testid="contact-item">
                        <InputText
                            label={viewModel?.form.name || ''}
                            changeHandler={changeHandler}
                        />
                        <InputText
                            label={viewModel?.form.subject || ''}
                            changeHandler={changeHandler}
                        />
                        <InputText
                            label={viewModel?.form.email || ''}
                            changeHandler={changeHandler}
                            type="email"
                        />
                        <InputTextArea
                            label={viewModel?.form.message || ''}
                            changeHandler={changeHandler}
                        />
                        <Button
                            label={viewModel?.form.send || ''}
                            clickHandler={submitHandler}
                        />
                    </ContactItemContainer>
                </>
            )}
        </ContactContainer>
    );
}
