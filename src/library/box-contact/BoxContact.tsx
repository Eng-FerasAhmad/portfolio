import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { routerPath } from 'router/constant';
import {
    BoxContactContainer,
    LabelWrapper,
} from 'src/library/box-contact/styles';

interface Props {
    label: string;
}

export default function BoxContact({ label }: Props): ReactElement {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(routerPath.contact);
    };

    return (
        <BoxContactContainer onClick={handleClick}>
            <LabelWrapper>{label}</LabelWrapper>
        </BoxContactContainer>
    );
}
