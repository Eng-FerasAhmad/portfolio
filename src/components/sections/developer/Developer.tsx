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
            <AnimationFadeIn duration={1}>
                {viewModel && (
                    <ContentContainer data-testid="developer-content">
                        <ImageContainer data-testid="developer-image">
                            <ProfileWrapper src="profile.jpg" alt="image" />
                        </ImageContainer>
                        <DescriptionContainer data-testid="developer-description">
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
