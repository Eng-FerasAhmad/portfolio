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

export default function Developer(): JSX.Element {
    const { viewModel } = useDeveloper();

    return (
        <DeveloperContainer data-testid="developer">
            <ContentContainer>
                <ImageContainer>
                    <ProfileWrapper src="profile.jpg" alt="image" />
                </ImageContainer>
                <DescriptionContainer>
                    {viewModel && (
                        <NameWrapper>
                            <span>{viewModel.name}</span>
                        </NameWrapper>
                    )}
                    {viewModel && (
                        <AboutWrapper>{viewModel.about}</AboutWrapper>
                    )}
                </DescriptionContainer>
            </ContentContainer>
        </DeveloperContainer>
    );
}
