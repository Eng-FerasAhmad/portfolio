import { ChangeEvent, useState } from 'react';
import Button from '../../../library/button/Button';
import IconSelector from '../../../library/icon-selector/IconSelector';
import InputText from '../../../library/input-text/InputText';
import InputTextArea from '../../../library/input-textarea/InputTextArea';
import ProgressBarComponent from '../../../library/progressbar/ProgressBar';
import { color } from '../../../style/color';
import { FormViewModel } from '../../../types/ContactTypes';
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
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormViewModel>({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const clickHandler = (): void => {
        setShow(!show);
    };

    const changeNameHandler = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        if (event?.target && event.target.value.length > 0) {
            setFormData({
                name: event.target.value,
                subject: formData?.subject || '',
                email: formData?.email || '',
                message: formData?.message || '',
            });
        }
    };

    const changeSubjectHandler = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        if (event?.target && event.target.value.length > 0) {
            setFormData({
                name: formData?.name || '',
                subject: event.target.value,
                email: formData?.email || '',
                message: formData?.message || '',
            });
        }
    };

    const changeEmailHandler = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        if (event?.target && event.target.value.length > 0) {
            setFormData({
                name: formData?.name || '',
                subject: formData?.subject || '',
                email: event.target.value,
                message: formData?.message || '',
            });
        }
    };
    const changeMessageHandler = (
        event: ChangeEvent<HTMLTextAreaElement> | undefined
    ): void => {
        if (event?.target && event.target.value.length > 0) {
            setFormData({
                name: formData?.name || '',
                subject: formData?.subject || '',
                email: formData?.email || '',
                message: event.target.value,
            });
        }
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
                            label={viewModel?.form.send || ''}
                            clickHandler={submitHandler}
                        />
                    </ContactItemContainer>
                </>
            )}
        </ContactContainer>
    );
}
