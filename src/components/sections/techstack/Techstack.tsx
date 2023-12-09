import { TechstackContainer } from './styles';
import useTechstack from './useTechstack';

export default function Techstack() {
  const { viewModel } = useTechstack();

  return (
    <TechstackContainer>
      <div>{viewModel && viewModel.entityHeader}</div>
    
    </TechstackContainer>
  );
}
