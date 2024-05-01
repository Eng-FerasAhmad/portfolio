import { useState } from 'react';
import {
    ProjectContainer,
    ProjectTitleWrapper,
    ProjectItemContainer,
} from './styles';

export default function Project(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    const clickHandler = (): void => {
        setShow(!show);
    };

    return (
        <ProjectContainer>
            <ProjectTitleWrapper onClick={clickHandler}>
                Project
            </ProjectTitleWrapper>
            {show && <ProjectItemContainer>Coming soon!</ProjectItemContainer>}
        </ProjectContainer>
    );
}
