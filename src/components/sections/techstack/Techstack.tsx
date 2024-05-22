import { ReactElement } from 'react';
import { TechstackContainer } from './styles';
import TechstackItem from './TechstackItem';
import useTechstack from './useTechstack';

export default function Techstack(): ReactElement {
    const { viewModel } = useTechstack();

    return (
        <TechstackContainer data-testid="techstack">
            {viewModel?.categories.map((category, index) => {
                return <TechstackItem key={index} category={category} />;
            })}
        </TechstackContainer>
    );
}
