import { useState } from 'react';
import { TechstackContainer, TechstackTitleWrapper } from './styles';
import TechstackItem from './TechstackItem';
import useTechstack from './useTechstack';

export default function Techstack(): JSX.Element {
    const { viewModel } = useTechstack();
    const [show, setShow] = useState<boolean>(false);

    const clickHandler = (): void => {
        setShow(!show);
    };

    return (
        <TechstackContainer data-testid="techstack">
            <TechstackTitleWrapper onClick={clickHandler}>
                {viewModel && viewModel.entityHeader}
            </TechstackTitleWrapper>

            {show &&
                viewModel?.categories.map((category, index) => {
                    return <TechstackItem key={index} category={category} />;
                })}
        </TechstackContainer>
    );
}
