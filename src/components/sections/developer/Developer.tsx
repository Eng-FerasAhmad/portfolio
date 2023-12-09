import FallbackComponent from '../../../library/fallback-component/FallbackComponent';
import { ContentContainer, DescriptionContainer, DeveloperContainer, ImageContainer } from './styles';
import useDeveloper from './useDeveloper';

export default function Developer() {
  const { viewModel } = useDeveloper();

  if (!viewModel) {
    return <FallbackComponent />
  }

  return (
    <DeveloperContainer>
      <ContentContainer>
        <ImageContainer>

        </ImageContainer>
        <DescriptionContainer>
          <div>{viewModel.about}</div>
        </DescriptionContainer>
      </ContentContainer>

    </DeveloperContainer>
  );
}
