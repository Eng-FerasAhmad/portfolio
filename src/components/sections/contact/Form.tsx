import { ChangeEvent, ReactElement, useState } from 'react';
import {
    ContactItemContainer,
    FormContainer,
} from 'components/sections/contact/styles';
import SuccessMessage from 'components/sections/contact/SuccessMessage';
import Button from 'src/library/button/Button';
import InputText from 'src/library/input-text/InputText';
import InputTextArea from 'src/library/input-textarea/InputTextArea';
import { color } from 'style/color';
import { ContactForm, ContactViewModel } from 'types/ContactTypes';
import { stringMailPattern } from 'utils/utils';

interface Props {
    viewModel: ContactViewModel;
    returnHandleValidation: (value: boolean) => void;
}

export default function Form({
    viewModel,
    returnHandleValidation,
}: Props): ReactElement {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const changeNameHandler = (
        event: ChangeEvent<HTMLInputElement> | undefined
    ): void => {
        setIsSubmit(false);
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
        setIsSubmit(false);
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
        setIsSubmit(false);
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
        setIsSubmit(false);
        setFormData({
            name: formData?.name || '',
            subject: formData?.subject || '',
            email: formData?.email || '',
            message: event?.target.value || '',
        });
    };

    const isMailValid = (): boolean => {
        return formData.email !== '' && stringMailPattern(formData.email);
    };

    const handleValidation = (): boolean => {
        const valid =
            isSubmit &&
            formData.name !== '' &&
            formData.message !== '' &&
            formData.subject !== '' &&
            isMailValid();

        return valid;
    };

    const submitHandler = (): void => {
        setIsSubmit(true);
        returnHandleValidation(handleValidation());
    };

    const isCheck = isSubmit && viewModel && formData;

    const emailError = (): string => {
        if (isCheck && formData?.email.length === 0)
            return viewModel?.form.error || '';
        if (!stringMailPattern(formData.email) && isSubmit)
            return viewModel?.form.invalidMail || '';
        return '';
    };

    const nameError =
        isCheck && formData?.name.length === 0 ? viewModel?.form.error : '';
    const subjectError =
        isCheck && formData?.subject.length === 0 ? viewModel?.form.error : '';
    const messageError =
        isCheck && formData?.message.length === 0 ? viewModel?.form.error : '';

    return (
        <FormContainer>
            {!handleValidation() ? (
                <ContactItemContainer
                    data-testid="contact-item"
                    onSubmit={submitHandler}
                >
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
                        error={emailError()}
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
                </ContactItemContainer>
            ) : (
                <SuccessMessage messageSent={viewModel.form.messageSent!} />
            )}
        </FormContainer>
    );
}
