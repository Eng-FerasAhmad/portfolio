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

export default function Developer(): ReactElement {
    const { viewModel } = useDeveloper();

    return (
        <DeveloperContainer data-testid="developer">
            {viewModel && (
                <ContentContainer>
                    <ImageContainer>
                        <ProfileWrapper src="profile.jpg" alt="image" />
                    </ImageContainer>
                    <DescriptionContainer>
                        <NameWrapper>{viewModel.name}</NameWrapper>
                        <AboutWrapper>{viewModel.about}</AboutWrapper>
                    </DescriptionContainer>
                </ContentContainer>
            )}
        </DeveloperContainer>
    );
}
