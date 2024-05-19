import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { routerPath } from 'router/constant';
import {
    BoxDeveloperContainer,
    LabelWrapper,
} from 'src/library/box-developer/styles';

interface Props {
    label: string;
}

export default function BoxDeveloper({ label }: Props): ReactElement {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(routerPath.developer);
    };

    return (
        <BoxDeveloperContainer onClick={handleClick}>
            <LabelWrapper>{label}</LabelWrapper>
        </BoxDeveloperContainer>
    );
}
