import { ChangeEvent, ReactElement, useState } from 'react';

import {
    ContactContainer,
    ContactItemContainer,
    DescriptionWrapper,
    ItemsContainer,
    ItemWrapper,
    SocialMediaWrapper,
} from './styles';
import useContact from './useContact';
import Button from 'src/library/button/Button';
import IconSelector from 'src/library/icon-selector/IconSelector';
import InputText from 'src/library/input-text/InputText';
import InputTextArea from 'src/library/input-textarea/InputTextArea';
import { AnimationFadeIn } from 'style/animation';
import { color } from 'style/color';
import { FormViewModel } from 'types/ContactTypes';

export default function Contact(): ReactElement {
    const { viewModel } = useContact();
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormViewModel>({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const changeNameHandler = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        setFormData({
            name: event?.target.value || '',
            subject: formData?.subject || '',
            email: formData?.email || '',
            message: formData?.message || '',
        });
    };

    const changeSubjectHandler = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        setFormData({
            name: formData?.name || '',
            subject: event?.target.value || '',
            email: formData?.email || '',
            message: formData?.message || '',
        });
    };

    const changeEmailHandler = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        setFormData({
            name: formData?.name || '',
            subject: formData?.subject || '',
            email: event?.target.value || '',
            message: formData?.message || '',
        });
    };
    const changeMessageHandler = (
        event: ChangeEvent<HTMLTextAreaElement> | undefined
    ): void => {
        setFormData({
            name: formData?.name || '',
            subject: formData?.subject || '',
            email: formData?.email || '',
            message: event?.target.value || '',
        });
    };

    const submitHandler = (): void => {
        setIsSubmit(true);
    };

    const isError = isSubmit && viewModel && formData;
    const nameError =
        isError && formData?.name.length === 0 ? viewModel?.form.error : '';
    const subjectError =
        isError && formData?.subject.length === 0 ? viewModel?.form.error : '';
    const emailError =
        isError && formData?.email.length === 0 ? viewModel?.form.error : '';
    const messageError =
        isError && formData?.message.length === 0 ? viewModel?.form.error : '';

    return (
        <ContactContainer data-testid="contact">
            <AnimationFadeIn duration={2}>
                <SocialMediaWrapper>
                    <DescriptionWrapper>
                        {viewModel?.description}
                    </DescriptionWrapper>
                </SocialMediaWrapper>

                <ContactItemContainer data-testid="contact-item">
                    <div>
                        <InputText
                            label={viewModel?.form.name || ''}
                            required={true}
                            error={nameError}
                            changeHandler={changeNameHandler}
                        />
                        <InputText
                            label={viewModel?.form.subject || ''}
                            error={subjectError}
                            changeHandler={changeSubjectHandler}
                        />
                        <InputText
                            label={viewModel?.form.email || ''}
                            changeHandler={changeEmailHandler}
                            error={emailError}
                            type="email"
                        />
                        <InputTextArea
                            label={viewModel?.form.message || ''}
                            changeHandler={changeMessageHandler}
                            error={messageError}
                        />
                        <Button
                            color={color.yellow}
                            secondaryColor={color.yellowDark}
                            label={viewModel?.form.send || ''}
                            clickHandler={submitHandler}
                        />
                    </div>
                </ContactItemContainer>
                <div>
                    <DescriptionWrapper>{viewModel?.title}</DescriptionWrapper>
                    <ItemsContainer>
                        {viewModel?.media.map((item) => {
                            return (
                                <ItemWrapper
                                    key={item.icon}
                                    href={item.link}
                                    target="_blank"
                                >
                                    <IconSelector iconName={item.icon} />

                                    <div>{item.name}</div>
                                </ItemWrapper>
                            );
                        })}
                    </ItemsContainer>
                </div>
            </AnimationFadeIn>
        </ContactContainer>
    );
}
