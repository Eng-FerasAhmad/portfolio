import ProgressBarComponent from '../../../library/progressbar/ProgressBar';
import {
  AboutWrapper,
  ContentContainer,
  DescriptionContainer,
  DeveloperContainer,
  ImageContainer,
  NameWrapper,
  ProfileWrapper,
} from './styles';
import useDeveloper from './useDeveloper';

export default function Developer() {
  const { viewModel } = useDeveloper();

  return (
    <DeveloperContainer data-testid="developer">
      <ContentContainer>
        <ImageContainer>
          <ProfileWrapper src="profile.jpg" alt="image" />
        </ImageContainer>
        <DescriptionContainer>
          {viewModel && <NameWrapper>{viewModel.name}</NameWrapper>}
          {viewModel && <AboutWrapper>{viewModel.about}</AboutWrapper>}
        </DescriptionContainer>
      </ContentContainer>
    </DeveloperContainer>
  );
}
