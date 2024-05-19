import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { routerPath } from 'router/constant';
import {
    BoxTechstackContainer,
    LabelWrapper,
} from 'src/library/box-techstack/styles';

interface Props {
    label: string;
}

export default function BoxTechstack({ label }: Props): ReactElement {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(routerPath.techstack);
    };

    return (
        <BoxTechstackContainer onClick={handleClick}>
            <LabelWrapper>{label}</LabelWrapper>
        </BoxTechstackContainer>
    );
}
