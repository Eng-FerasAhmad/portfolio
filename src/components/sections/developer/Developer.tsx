import { DeveloperContainer } from './styles';
import useDeveloper from './useDeveloper';

export default function Developer() {
  const { viewModel } = useDeveloper();

  return (
    <DeveloperContainer>
      <div>{viewModel && viewModel.entityHeader}</div>
    </DeveloperContainer>
  );
}
