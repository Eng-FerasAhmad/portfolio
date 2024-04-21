import { TechstackContainer } from './styles';
import TechstackItem from './TechstackItem';
import useTechstack from './useTechstack';

export default function Techstack(): JSX.Element {
    const { viewModel } = useTechstack();

    return (
        <TechstackContainer data-testid="techstack">
            <div>{viewModel && viewModel.entityHeader}</div>
            {viewModel?.categories.map((category, index) => {
                return <TechstackItem key={index} category={category} />;
            })}
        </TechstackContainer>
    );
}
