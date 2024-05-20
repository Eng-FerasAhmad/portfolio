import { ReactElement } from 'react';

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
import { AnimationFadeIn } from 'style/animation';

export default function Developer(): ReactElement {
    const { viewModel } = useDeveloper();

    return (
        <DeveloperContainer data-testid="developer">
            <AnimationFadeIn duration={2}>
                {viewModel && (
                    <ContentContainer>
                        <ImageContainer>
                            <ProfileWrapper src="profile.jpg" alt="image" />
                        </ImageContainer>
                        <DescriptionContainer>
                            <NameWrapper>{viewModel.name}</NameWrapper>
                            <AboutWrapper>{viewModel.about}</AboutWrapper>
                            <AboutWrapper>{viewModel.aboutMore}</AboutWrapper>
                        </DescriptionContainer>
                    </ContentContainer>
                )}
            </AnimationFadeIn>
        </DeveloperContainer>
    );
}
