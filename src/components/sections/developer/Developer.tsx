import FallbackComponent from '../../../library/fallback-component/FallbackComponent';
import { AboutWrapper, ContentContainer, DescriptionContainer, DeveloperContainer, ImageContainer, NameWrapper, ProfileWrapper } from './styles';
import useDeveloper from './useDeveloper';

export default function Developer() {
  const { viewModel } = useDeveloper();

  if (!viewModel) {
    return <FallbackComponent />
  }

  return (
    <DeveloperContainer data-testid="developer">
      <ContentContainer>
        <ImageContainer><ProfileWrapper src="profile.jpg" alt="image" /></ImageContainer>
        <DescriptionContainer>
          <NameWrapper>{viewModel.name}</NameWrapper>
          <AboutWrapper>{viewModel.about}</AboutWrapper>
        </DescriptionContainer>
      </ContentContainer>
    </DeveloperContainer>
  );
}
